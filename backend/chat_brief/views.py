from django.shortcuts import render
from .models import Task
from .serializers import TaskSerializer
from rest_framework import viewsets

# Create your views here.

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()