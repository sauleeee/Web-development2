import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Company,Vacancy


@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        company_json = [company.to_json() for company in companies]
        return JsonResponse(company_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        try:
            company = Company.objects.create(name=data['name'])
        except Exception as e:
            return JsonResponse({'message': str(e)})

        return JsonResponse(company.to_json())

@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data['name']
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message': 'deleted'}, status=204)

@csrf_exempt
def company_vacancies(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error: ' + str(e)})
    vacancies_list = company.vacancies.all()
    vacancies_json = [v.to_json() for v in vacancies_list]

    if request.method == 'GET':
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == 'POST':
        return JsonResponse({'data': 'added'})




@csrf_exempt
def vacancy_list(request):
    if request.method == 'GET':
        vacancy = Vacancy.objects.all()
        vacancy_json = [vacancy.to_json() for vacancy in vacancy]
        return JsonResponse(vacancy_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        try:
            vacancy = Vacancy.objects.create(name=data['name'])
        except Exception as e:
            return JsonResponse({'message': str(e)})

        return JsonResponse(vacancy.to_json())


@csrf_exempt
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        vacancy.name = data['name']
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'message': 'deleted'}, status=204)


@csrf_exempt
def vacancy_top(request):
    if request.method == 'GET':
        try:
            vacancy = Vacancy.objects.order_by('-salary')[:10]
            vacancy_json = [vacancy.to_json() for vacancy in vacancy]
        except Company.DoesNotExist as e:
            return JsonResponse({'error: ' + str(e)})

        return JsonResponse(vacancy_json, safe=False)

