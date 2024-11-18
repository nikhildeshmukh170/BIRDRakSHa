from django.urls import path
from . import views

urlpatterns = [
    path('predict/', views.predict_bird_species, name='predict_bird_species'),
]
