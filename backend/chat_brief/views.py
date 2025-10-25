from django.shortcuts import render
from .models import Task, UserLogin, UserRegister
from .serializers import TaskSerializer, UserRegisterSerializer, UserLoginSerializer
from rest_framework import viewsets, generics
from rest_framework.permissions import  AllowAny, IsAuthenticated

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    
class UserRegisterView(generics.CreateAPIView):
    queryset = UserRegister.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [AllowAny]
    
class UserLoginView(generics.CreateAPIView):
    queryset = UserLogin.objects.all()
    serializer_class = UserLoginSerializer
    permission_classes = [IsAuthenticated]