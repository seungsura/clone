from django.shortcuts import render
from rest_framework.views import APIView
from content.models import Feed


class Main(APIView):
    template_name = 'clone/main.html'
    feed_list = Feed.object.all()

    def get(self, request):
        print("get으로 호출")
        return render(request, self.template_name, context=dict(feed_list=feed_list))
    
    
    def post(self, request):
        print("post로 호출")
        return render(request, self.template_name)