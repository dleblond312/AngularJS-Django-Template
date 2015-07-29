__author__ = 'Daniel'
from django.http import HttpResponse
from django.views.generic import TemplateView


class AngularView(TemplateView):
    template_name = 'index.html'