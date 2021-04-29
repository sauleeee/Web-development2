from django.urls import path
from .views import vacancy_detail,vacancy_list,vacancy_top,company_detail,company_list,company_vacancies

urlpatterns = [
    path('company/', company_list),
    path('company/<int:company_id>/', company_detail),
    path('company/<int:company_id>/vacancy/', company_vacancies),
    path('vacancy/', vacancy_list),
    path('vacancy/<int:vacancy_id>', vacancy_detail),
    path('vacancy/top_ten/', vacancy_top)
]


