from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from . import models
from .serializers import NotesSerializer
# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    routes = [
        {'Endpoint': '/notes/',
         'method': '',
         'body': '',
         'description': '',
         },
        {'Endpoint': '/notes/id',
         'method': '',
         'body': '',
         'description': '',
         },
        {'Endpoint': '/notes/create',
         'method': '',
         'body': '',
         'description': '',
         },
        {'Endpoint': '/notes/id/update',
         'method': '',
         'body': '',
         'description': '',
         },
        {'Endpoint': '/notes/id/delete',
         'method': '',
         'body': '',
         'description': '',
         }, ]
    return Response(routes)


@api_view(['GET'])
def getAllNotes(request):
    Notes = models.Note.objects.all().order_by('-date_updated')
    serialized = NotesSerializer(Notes, many=True)
    return Response(serialized.data)


@api_view(['GET'])
def getNote(request, pk):
    Note = models.Note.objects.get(id=pk)
    serialized = NotesSerializer(Note, many=False)
    return Response(serialized.data)


@api_view(['PUT'])
def updateNote(request, pk):
    data = request.data
    note = models.Note.objects.get(id=pk)
    serializer = NotesSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()
        print('saved')
        print(request.data)
    return Response(serializer.data)


@api_view(['DELETE'])
def deleteNote(request, pk):
    note = models.Note.objects.get(id=pk)
    note.delete()
    return Response('Note deleted successfully!')
