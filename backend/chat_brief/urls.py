from django.urls import path, include
from .views import TaskView, UserRegisterView, UserLoginView
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = routers.DefaultRouter()
router.register(r'tasks', TaskView)

urlpatterns = [
    path("", include(router.urls)),
    path("register/", UserRegisterView.as_view(), name="register"),
    path("login/",UserLoginView.as_view(), name = "login"),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]