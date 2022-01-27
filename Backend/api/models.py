from operator import mod
from django.db import models

class Product(models.Model):
    product_name = models.CharField(max_length=100)
    product_price = models.PositiveIntegerField(default=0)
    product_stock = models.PositiveIntegerField(default=0)
    product_image = models.ImageField(upload_to='products',null=True,blank=True)

    def __str__(self):
        return self.product_name
    