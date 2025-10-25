from rest_framework import serializers
from .models import Task, User
from django.contrib.auth.hashers import make_password

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task 
        fields = '__all__'
        
class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','name', 'email', 'password']
        write_only_fields = ('password',)
        read_only_fields = ('id',)
           
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)
    
class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['email', 'password']
        model = User
        write_only_fields = ('password')