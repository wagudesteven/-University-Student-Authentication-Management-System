from django.contrib.auth.models import User

from rest_framework.decorators import (
    api_view,
    permission_classes,
)

from rest_framework.permissions import (
    IsAuthenticated,
)

from rest_framework.response import (
    Response,
)

from rest_framework import status

from .models import (
    StudentProfile,
    Unit,
    StudentUnit,
    HostelApplication,
)

from .serializers import (
    ProfileSerializer,
    UnitSerializer,
)


@api_view(["GET"])
@permission_classes(
    [IsAuthenticated]
)
def profile_view(request):
    profile = StudentProfile.objects.get(
        user=request.user
    )

    serializer = ProfileSerializer(
        profile
    )

    return Response(serializer.data)


@api_view(["POST"])
@permission_classes(
    [IsAuthenticated]
)
def register_units(request):
    profile = StudentProfile.objects.get(
        user=request.user
    )

    if profile.fee_balance > 0:
        return Response(
            {
                "error":
                "Fee balance must be cleared"
            },
            status=400,
        )

    unit_ids = request.data.get(
        "units",
        [],
    )

    for unit_id in unit_ids:
        unit = Unit.objects.get(
            id=unit_id
        )

        StudentUnit.objects.create(
            student=profile,
            unit=unit,
            semester=profile.semester,
        )

    return Response(
        {
            "message":
            "Units registered"
        }
    )


@api_view(["POST"])
@permission_classes(
    [IsAuthenticated]
)
def hostel_apply(request):
    profile = StudentProfile.objects.get(
        user=request.user
    )

    if profile.fee_balance > 0:
        return Response(
            {
                "error":
                "Clear fee first"
            },
            status=400,
        )

    hostel = request.data.get(
        "hostel_name"
    )

    HostelApplication.objects.create(
        student=profile,
        hostel_name=hostel,
        status="pending",
    )

    profile.hostel_status = "pending"

    profile.save()

    return Response(
        {
            "message":
            "Application submitted"
        }
    )


@api_view(["GET"])
def units_view(request):
    units = Unit.objects.all()

    serializer = UnitSerializer(
        units,
        many=True,
    )

    return Response(
        serializer.data
    )