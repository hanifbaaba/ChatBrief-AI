from django.db import models
# from django.contrib.auth.models import User

# Create your models here.
class Task(models.Model):
    task = models.CharField(max_length=100)
    description = models.TextField()
    
class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)