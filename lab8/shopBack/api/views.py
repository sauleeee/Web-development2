from django.shortcuts import render
from .models import Product,Category

from django.http.response import JsonResponse


def product_list(request):
    # SELECT * FROM core_product;
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, product_id):
    # SELECT * FROM core_product WHERE id = <product_id>;
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(product.to_json())





def category_list(request):
    categories = Category.objects.all()
    category_json = [category.to_json() for category in categories]
    return JsonResponse(category_json, safe=False)

def category_detail(request,category_id):
    try:
        category = Category.objects.get(id = category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)},status=400)

    return JsonResponse(category.to_json())