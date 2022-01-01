from django.db import models

# Create your models here.


class Note(models.Model):
    note_body = models.TextField(null=True, blank=True)
    date_updated = models.DateTimeField(auto_now=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.note_body[:20]
