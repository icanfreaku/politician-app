# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-07-09 17:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sampleapp', '0007_auto_20160709_1733'),
    ]

    operations = [
        migrations.AlterField(
            model_name='politician',
            name='facebook_url',
            field=models.CharField(blank=True, default='', max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='politician',
            name='instagram_url',
            field=models.CharField(blank=True, default='', max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='politician',
            name='linkedin_url',
            field=models.CharField(blank=True, default='', max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='politician',
            name='party_profile_url',
            field=models.CharField(blank=True, default='', max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='politician',
            name='photo_url',
            field=models.CharField(blank=True, default='', max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='politician',
            name='snapchat_url',
            field=models.CharField(blank=True, default='', max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='politician',
            name='twitter_url',
            field=models.CharField(blank=True, default='', max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='politician',
            name='website_url',
            field=models.CharField(blank=True, default='', max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='politician',
            name='youtube_url',
            field=models.CharField(blank=True, default='', max_length=500, null=True),
        ),
    ]
