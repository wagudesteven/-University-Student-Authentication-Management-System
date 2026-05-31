from django.urls import path

from .views import (
    CustomTokenView,
    LecturerRegisterView,
    StudentProfileView,
    AddResultView,
    StudentResultsView,
)

urlpatterns = [
    path(
        "token/",
        CustomTokenView.as_view(),
        name="token",
    ),

    path(
        "lecturer/register/",
        LecturerRegisterView.as_view(),
    ),

    path(
        "student/profile/",
        StudentProfileView.as_view(),
    ),

    path(
        "lecturer/add-result/",
        AddResultView.as_view(),
    ),

    path(
        "student/results/",
        StudentResultsView.as_view(),
    ),
]