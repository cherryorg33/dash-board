from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=10)
    # Add other user-related fields as needed

    def __str__(self):
        return self.username
    

class DataPoint(models.Model):
    end_year = models.IntegerField(null=True, blank=True)
    intensity = models.IntegerField(null=True, blank=True)
    sector = models.CharField(max_length=255,null=True, blank=True)
    topic = models.CharField(max_length=255,null=True, blank=True)
    insight = models.TextField(null=True, blank=True)
    url = models.URLField(max_length=2255)
    region = models.CharField(max_length=255,null=True, blank=True)
    start_year = models.IntegerField(null=True, blank=True)
    impact = models.CharField(max_length=255, null=True, blank=True)
    added = models.CharField(max_length=255, null=True, blank=True)
    published = models.CharField(max_length=255, null=True, blank=True)
    country = models.CharField(max_length=255,null=True, blank=True)
    relevance = models.IntegerField(null=True, blank=True)
    pestle = models.CharField(max_length=255,null=True, blank=True)
    source = models.CharField(max_length=255,null=True, blank=True)
    title = models.CharField(max_length=2555,null=True, blank=True)
    likelihood = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.title