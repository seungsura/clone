from django.shortcuts import render
from rest_framework.views import APIView
from .models import Feed

# Create your views here.
class Main(APIView):
    template_name = 'clone/main.html'

    def get(self, request):
        print("get으로 호출")
        #가장 최신글이 제일 상단에 오도록
        feed_list = Feed.objects.all().order_by('-id')  # select * from content_feed
        return render(request, self.template_name, context=dict(feeds=feed_list))