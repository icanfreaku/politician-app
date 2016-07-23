from django.shortcuts import render
from .models import Politician
from .serializers import PoliticianSerializer
from rest_framework import generics
from django.http import HttpResponse, HttpResponseNotFound
from tweepy import OAuthHandler
from tweepy import API
from tweepy import TweepError
import json


# import twitter keys and tokens
consumer_key = "iaWUFjCmj8pkQHrB5n7Ex73x6"
consumer_secret = "FgwrlAGeDSvBMxhrKO4uLNkOyNJPATUL0jgZYMLG39kyj56MsZ"
access_token = "91611384-WMvyZAmF060lQ93ZtILR5sDseHZ2iJdomMuhHKAJR"
access_token_secret = "ZQ5VNxyIDM6ncmVmxavEmt13phjcChhk4mMfMf7vRk0G3"

# set twitter keys/tokens
auth = OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = API(auth)

class PoliticianList(generics.ListCreateAPIView):
    queryset = Politician.objects.all()
    serializer_class = PoliticianSerializer


class PoliticianDetail(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'slug'
    queryset = Politician.objects.all()
    serializer_class = PoliticianSerializer


def tweet(request, id):
    status = None
    #try:
    status = api.get_status(id)
    #except TweepError:
    #     pass

    if status:
        json_str = json.dumps(status._json)
        return HttpResponse(json_str, content_type='application/json')  
    else:    
        return HttpResponseNotFound('<h1>Page not found</h1>')   

# Create your views here.
def index(request):
    return render(request, "sampleapp/index.html")