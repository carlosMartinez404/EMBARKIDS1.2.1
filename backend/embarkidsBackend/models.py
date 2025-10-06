from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone

class UsuarioManager(BaseUserManager):
    """Manager personalizado para el modelo Usuario"""

    def create_user(self,email, password=None, **extra_fields):
        """Creay guarda un usuario normal"""
        if not email:
            raise ValueError("Error")
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user


    def create_superuser(self, email, password=None, **extra_fields):
        """Crea y guarda un Super Usuario"""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('El superusuario debe tener is_staff=True')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('El super usuario debe tener is_superuser=True')

        return self.create_user(email, password, **extra_fields)


    
class Usuario(AbstractBaseUser, PermissionsMixin):
    """Modelo de usuario personalizado que usa email en lugar de username"""
    
    email = models.EmailField(
        verbose_name='Correo electrónico',
        max_length=255,
        unique=True
    )
    nombre = models.CharField(
        verbose_name='Nombre',
        max_length=100
    )
    apellido = models.CharField(
        verbose_name='Apellido',
        max_length=100
    )
    telefono = models.CharField(
        verbose_name='Teléfono',
        max_length=20,
        blank=True,
        null=True
    )
    
    # Campos de control
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    
    objects = UsuarioManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nombre', 'apellido']
    
    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
        ordering = ['-date_joined']
    
    def __str__(self):
        return self.email
    
    def get_full_name(self):
        """Retorna el nombre completo del usuario"""
        return f"{self.nombre} {self.apellido}"
    
    def get_short_name(self):
        """Retorna el nombre del usuario"""
        return self.nombre

    