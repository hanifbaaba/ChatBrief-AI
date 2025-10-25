from django.db import models

class Task(models.Model):
    task = models.CharField(max_length=100)
    description = models.TextField()
    
class UserRegister(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    
class UserLogin(models.Model):
    email = models.EmailField()
    password = models.CharField(max_length=100)