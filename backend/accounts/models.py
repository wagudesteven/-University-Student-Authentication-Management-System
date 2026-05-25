from django.db import models
from django.contrib.auth.models import User


class StudentProfile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
    )

    admission_number = models.CharField(
        max_length=30,
        unique=True,
        blank=False,
        null=False,
    )

    course = models.CharField(
        max_length=100,
    )

    year_of_study = models.IntegerField(
        default=1,
    )

    semester = models.CharField(
       max_length=30,
       default="Year 1 Semester 1",
    )

    phone = models.CharField(
        max_length=20,
        blank=True,
    )

    fee_balance = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0,
    )

    hostel_status = models.CharField(
        max_length=20,
        default="not applied",
    )

    def __str__(self):
        return self.user.username


class Unit(models.Model):
    code = models.CharField(
        max_length=20,
    )

    name = models.CharField(
        max_length=100,
    )

    semester = models.CharField(
        max_length=30,
        default="Year 1 Semester 1",
    )

    def __str__(self):
        return self.code


class StudentUnit(models.Model):
    student = models.ForeignKey(
        StudentProfile,
        on_delete=models.CASCADE,
    )

    unit = models.ForeignKey(
        Unit,
        on_delete=models.CASCADE,
    )

    semester = models.CharField(
        max_length=30,
        default="Year 1 Semester 1",
    )


class HostelApplication(models.Model):
    student = models.ForeignKey(
        StudentProfile,
        on_delete=models.CASCADE,
    )

    hostel_name = models.CharField(
        max_length=100,
    )

    status = models.CharField(
        max_length=20,
        default="pending",
    )