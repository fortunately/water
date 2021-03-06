# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-19 16:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Source',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(blank=True, default='', max_length=100)),
                ('address', models.CharField(max_length=200)),
                ('_type', models.CharField(choices=[('rodnik', 'Родник'), ('kolonka', 'Колонка')], default='rodnik', max_length=100, verbose_name='Тип источника')),
                ('distance', models.PositiveIntegerField()),
                ('pressure', models.PositiveIntegerField()),
                ('rating', models.FloatField()),
                ('visitors', models.PositiveIntegerField()),
                ('analiz', models.BooleanField(default=False)),
            ],
        ),
    ]
