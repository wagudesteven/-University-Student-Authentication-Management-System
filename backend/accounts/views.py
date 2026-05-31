from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)
from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer,
)


# =========================
# JWT TOKEN + ROLE
# =========================
class CustomTokenSerializer(
    TokenObtainPairSerializer
):
    def validate(self, attrs):
        data = super().validate(attrs)

        data["role"] = (
            "lecturer"
            if self.user.is_staff
            else "student"
        )

        data["username"] = (
            self.user.username
        )

        data["user_id"] = (
            self.user.id
        )

        return data


class CustomTokenView(
    TokenObtainPairView
):
    serializer_class = (
        CustomTokenSerializer
    )


# =========================
# LECTURER REGISTER
# =========================
class LecturerRegisterView(
    APIView
):
    permission_classes = [
        permissions.AllowAny
    ]

    def post(self, request):
        username = (
            request.data.get(
                "username"
            )
        )

        password = (
            request.data.get(
                "password"
            )
        )

        if (
            not username
            or not password
        ):
            return Response(
                {
                    "error":
                    "username/password required"
                },
                status=400,
            )

        if User.objects.filter(
            username=username
        ).exists():
            return Response(
                {
                    "error":
                    "User exists"
                },
                status=400,
            )

        user = (
            User.objects.create_user(
                username=username,
                password=password,
            )
        )

        user.is_staff = True
        user.save()

        return Response(
            {
                "message":
                "Lecturer registered successfully"
            },
            status=201,
        )


# =========================
# PROFILE
# =========================
class StudentProfileView(
    APIView
):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        return Response(
            {
                "username":
                request.user.username,

                "role":
                "lecturer"
                if request.user.is_staff
                else "student",
            }
        )


# =========================
# ADD RESULT
# =========================
class AddResultView(
    APIView
):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def post(self, request):
        if (
            not request.user.is_staff
        ):
            return Response(
                {
                    "error":
                    "Only lecturers allowed"
                },
                status=403,
            )

        return Response(
            {
                "message":
                "Result added successfully",

                "data":
                request.data,
            }
        )


# =========================
# STUDENT RESULTS
# =========================
class StudentResultsView(
    APIView
):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        return Response(
            {
                "results": [
                    {
                        "unit":
                        "Programming 101",

                        "cat":
                        30,

                        "exam":
                        65,

                        "grade":
                        "B+",
                    }
                ]
            }
        )