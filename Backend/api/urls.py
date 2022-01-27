from django.urls import path,include
from rest_framework import routers
from api.views import ProductVuSet

router = routers.DefaultRouter()
router.register('',ProductVuSet,basename='products')

urlpatterns = [
    path('',include(router.urls)),
]
