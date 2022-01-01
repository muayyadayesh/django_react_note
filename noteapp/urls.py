from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('notes/', views.getAllNotes, name='notes'),
    path('note/new/', views.newNote, name='new-note'),
    path('note/<int:pk>/update/', views.updateNote, name='update-note'),
    path('note/<int:pk>/delete/', views.deleteNote, name='delete-note'),
    path('note/<int:pk>/', views.getNote, name='note'),
]
