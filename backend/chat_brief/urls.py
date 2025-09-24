from django.urls import path
from .views import TaskView
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'tasks', TaskView)
urlpatterns = router.urls
