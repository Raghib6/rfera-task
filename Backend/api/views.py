import imp
from operator import ge
from django.shortcuts import render
from rest_framework import viewsets
from api.models import Product
from api.serializers import ProductSerializer

class ProductVuSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
