from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import login,authenticate
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from .serializers import UserSerializer

def index(request):
	return HttpResponse('hello world')

class LoginView(APIView):
	@csrf_exempt
	def post(self,request):
		username=request.data.get('username')
		password=request.data.get('password')
		user=authenticate(request,username=username,password=password)
		serializer=UserSerializer(user)
		if user is not None:
			login(request,user)
			return Response(serializer.data)
		else:
			return Response({"message":"Wrong credentials"},status=status.HTTP_401_UNAUTHORIZED)

class SignupView(APIView):
	def post(self,request):
		username=request.data.get('username')
		email=request.data.get('email')
		password=request.data.get('password')
		user=User.objects.create(username=username,email=email)
		user.set_password(password)
		user.save()
		return Response({"message":"sucess"})
