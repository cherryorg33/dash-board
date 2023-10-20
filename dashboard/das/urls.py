from django.contrib import admin
from django.urls import path

from .views import userlogin,user,datapoint,datapoints,points


urlpatterns = [
    path('login', userlogin),
    path('user', user),
    path('data', datapoint),
    path('datas', datapoints),
    path('points', points),
]