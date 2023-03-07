from django.shortcuts import render
from rest_framework.views import APIView
from .models import Feed

# Create your views here.
class Main(APIView):
    template_name = 'clone/main.html'

    def get(self, request):
        print("get으로 호출")
        feed_list = Feed.objects.all()  # select * from content_feed
        return render(request, self.template_name, context=dict(feeds=feed_list))