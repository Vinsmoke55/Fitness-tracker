from django.urls import path,include
from .import views
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('exercise',views.ExerciseViewSet)
router.register('workout',views.WorkoutViewSet)
router.register('workoutexercise',views.WorkoutExerciseViewSet)

urlpatterns=[
	path('index',views.index,name='index'),
	path('login',views.LoginView.as_view(),name='login'),
	path('signup',views.SignupView.as_view(),name='signup'),
	path('', include(router.urls))
]