from django.urls import path

from .views import product_list, product_detail
from .views import category_list,category_detail

urlpatterns = [
    path('category/', category_list),
    path('category/<int:category_id>', category_detail),

    path('products/', product_list),
    path('products/<int:product_id>/', product_detail),

    ]