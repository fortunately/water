# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-11 09:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sources', '0010_auto_20170511_0934'),
    ]

    operations = [
        migrations.CreateModel(
            name='SourcePhoto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='', max_length=100)),
            ],
            options={
                'verbose_name': 'Фото источника',
                'verbose_name_plural': 'Фото источников',
            },
        ),
        migrations.AddField(
            model_name='source',
            name='sourcephoto',
            field=models.ManyToManyField(to='sources.SourcePhoto'),
        ),
    ]