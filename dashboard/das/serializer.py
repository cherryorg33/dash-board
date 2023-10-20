from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class DataPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataPoint
        fields = ('intensity', 'likelihood', 'relevance', 'start_year', 'country', 'topic', 'region')

class DataPointsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataPoint
        fields = ('intensity',  'start_year','country','relevance','likelihood')


class PointsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataPoint
        fields = ('intensity', 'country')