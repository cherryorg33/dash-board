from django.shortcuts import render
from.models import *
from .serializer import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.





@api_view(['POST'])
def userlogin(request):
    Userobj = User.objects.all()
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response("login sucefully")

@api_view(['GET'])
def user(requset):
    userobj = User.objects.all()
    serializer=UserSerializer(userobj,many=True)
    return Response({"status":200,"payload":serializer.data})


@api_view(['GET'])
def datapoint(requset):
    datapoints = DataPoint.objects.all()
    serializer=DataPointSerializer(datapoints,many=True)
    return Response({"status":200,"object":serializer.data})


@api_view(['GET'])
def datapoints(request):
    datapoints = DataPoint.objects.filter(start_year__gt=2017, intensity__gt=0,country__isnull=False,country__gt='')
    serializer=DataPointsSerializer(datapoints,many=True)
    return Response({"status":200,"object":serializer.data})

@api_view(['GET'])
def points(request):
    datapoints = DataPoint.objects.filter(intensity__gt=0,country__isnull=False,country__gt='')
    serializer= PointsSerializer(datapoints,many=True)
    return Response({"status":200,"object":serializer.data})