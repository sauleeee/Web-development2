from django.db import models

from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = 'Categories'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField(default=0)
    description = models.TextField(default='')
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    category_id = models.ForeignKey(Category, on_delete=models.DO_NOTHING, default=1)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
            'category_id': self.category_id.__str__()
        }

