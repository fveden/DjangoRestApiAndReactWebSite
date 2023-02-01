from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TestSerializer
from .models import TestEntity


class TestView(viewsets.ModelViewSet):
    serializer_class = TestSerializer
    queryset = TestEntity.objects.all()

