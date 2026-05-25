from django.contrib import admin

from .models import (
    StudentProfile,
    Unit,
    StudentUnit,
    HostelApplication,
)

admin.site.register(
    StudentProfile
)

admin.site.register(
    Unit
)

admin.site.register(
    StudentUnit
)

admin.site.register(
    HostelApplication
)