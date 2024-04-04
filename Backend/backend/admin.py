from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Post, Comment,Like,Message,Friendship,Group,Event,Location,GroupMessage
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Like)
admin.site.register(Message)
admin.site.register(Friendship)
admin.site.register(Group)
admin.site.register(Event)
admin.site.register(Location)
admin.site.register(GroupMessage)
