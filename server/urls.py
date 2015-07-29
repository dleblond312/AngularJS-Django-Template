from django.conf.urls import include, url
from django.contrib import admin
from glue.views import *
from glue.api import *

urlpatterns = [
    # Examples:
    # url(r'^$', 'server.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^api/user/data/', view=user_data),
    url(r'^api/user/signout/', view=user_signout),
    url(r'^api/user/signin/', view=user_signin),
    url(r'^api/user/register/', view=user_register),
    url(r'^admin', include(admin.site.urls)),
    url(r'^', AngularView.as_view()),

]

