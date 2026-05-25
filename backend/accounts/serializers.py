from rest_framework import serializers

from django.contrib.auth.models import User

from .models import (
    StudentProfile,
    Unit,
    StudentUnit,
    HostelApplication,
)


class ProfileSerializer(
    serializers.ModelSerializer
):
    username = serializers.CharField(
        source="user.username"
    )

    email = serializers.EmailField(
        source="user.email"
    )

    class Meta:
        model = StudentProfile

        fields = [
            "username",
            "email",
            "admission_number",
            "course",
            "year_of_study",
            "semester",
            "phone",
            "fee_balance",
            "hostel_status",
        ]


class UnitSerializer(
    serializers.ModelSerializer
):
    class Meta:
        model = Unit
        fields = "__all__"


class HostelSerializer(
    serializers.ModelSerializer
):
    class Meta:
        model = HostelApplication
        fields = "__all__"