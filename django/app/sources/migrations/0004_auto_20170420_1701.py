# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-20 17:01
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sources', '0003_source'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='source',
            options={'verbose_name': 'Источник', 'verbose_name_plural': 'Источники'},
        ),
        migrations.RenameField(
            model_name='source',
            old_name='_type',
            new_name='type',
        ),
    ]
