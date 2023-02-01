from django.contrib import admin
from .models import TestEntity


class TestEntityAdmin(admin.ModelAdmin):
    list_display = ("title", "description")

#Register model

admin.site.register(TestEntity, TestEntityAdmin)
