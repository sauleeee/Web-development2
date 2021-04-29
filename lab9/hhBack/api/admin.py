from django.contrib import admin
from .models import Company, Vacancy


@admin.register(Company)
class Company(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'city', 'address')
    search_fields = ('name','city')


@admin.register(Vacancy)
class Vacancy(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'salary')
    search_fields = ('name', 'salary')
    list_filter = ('company',)
