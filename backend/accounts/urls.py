from django.urls import path

from .views import (
    profile_view,
    register_units,
    hostel_apply,
    units_view,
)

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path(
        "login/",
        TokenObtainPairView.as_view(),
    ),

    path(
        "refresh/",
        TokenRefreshView.as_view(),
    ),

    path(
        "profile/",
        profile_view,
    ),

    path(
        "units/",
        units_view,
    ),

    path(
        "register-units/",
        register_units,
    ),

    path(
        "hostel-apply/",
        hostel_apply,
    ),
]