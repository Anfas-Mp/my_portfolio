from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('about/',views.about,name='about'),
    path('timeline/',views.timeline,name='timeline'),
    path('project/',views.project,name='project'),
    path('contact/',views.contact,name='contact'),
]
