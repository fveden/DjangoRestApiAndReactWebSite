from rest_framework import serializers
from .models import TestEntity


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestEntity
        fields = ('id', 'title', 'description')