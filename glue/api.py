__author__ = 'Daniel'
import simplejson as json
from django.contrib.auth import logout, authenticate, login
from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseServerError, HttpResponseForbidden
from rest_framework.renderers import JSONRenderer
from glue.models import *
from glue.serializers import *
from datetime import datetime, timedelta


class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """

    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


def user_data(request):
    if request.user.is_authenticated():
        return JSONResponse({'username': request.user.username, 'email': request.user.email})
    else:
        return JSONResponse(False)


def user_signout(request):
    logout(request)
    return HttpResponse()


def user_signin(request):
    if request.method == "POST":
        data = json.loads(request.body)
        if 'username' in data and 'password' in data:
            user = authenticate(username=data['username'], password=data['password'])

            if user is not None:
                if user.is_active:
                    login(request, user)
                    return JSONResponse({'username': user.username, 'email': user.email, 'authorized' : True})
            else:
                return HttpResponseForbidden()
    return HttpResponseForbidden()


def user_register(request):
    if request.method == "POST":
        data = json.loads(request.body)

        user = User.objects.create(username=data['username'], email=data['email'])
        user.set_password(data['password'])
        # Optional fields
        if 'firstName' in data:
            user.first_name = data['firstName']
        if 'lastName' in data:
            user.last_name = data['lastName']
        user.save()

        return user_signin(request)

    return HttpResponseNotAllowed()
