#!/bin/bash

# Script de inicio para Django con Docker
# Este script se ejecuta cada vez que el contenedor inicia

set -e  # Detiene el script si hay algún error

echo "🔍 Esperando a que PostgreSQL esté listo..."
while ! nc -z $DB_HOST $DB_PORT; do
  sleep 0.5
done
echo "✅ PostgreSQL está listo!"

echo "🔄 Aplicando migraciones de base de datos..."
python manage.py migrate --noinput

echo "👤 Verificando superusuario..."
python manage.py shell << EOF
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(email='admin@embarkids.com').exists():
    User.objects.create_superuser(
        email='admin@embarkids.com',
        password='admin123',
        nombre='Admin',
        apellido='Sistema'
    )
    print('✅ Superusuario creado: email=admin@embarkids.com, password=admin123')
else:
    print('ℹ️  Superusuario ya existe')
EOF

echo "📦 Recolectando archivos estáticos..."
python manage.py collectstatic --noinput --clear 2>/dev/null || echo "⚠️  Collectstatic omitido (solo necesario en producción)"

echo "🚀 Iniciando servidor Django en 0.0.0.0:8000"
exec python manage.py runserver 0.0.0.0:8000