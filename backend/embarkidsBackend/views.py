from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse

def saludo(request):
    return JsonResponse({'mensaje': 'Hola desde Django!'})