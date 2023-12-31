# Generated by Django 4.2.6 on 2023-10-17 03:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('das', '0002_datapoint'),
    ]

    operations = [
        migrations.AlterField(
            model_name='datapoint',
            name='end_year',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='datapoint',
            name='impact',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='datapoint',
            name='region',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='datapoint',
            name='sector',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='datapoint',
            name='start_year',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='datapoint',
            name='topic',
            field=models.CharField(max_length=255),
        ),
    ]
