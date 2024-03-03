from django.urls import path,include
from .import views
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('exercise',views.ExerciseViewSet)

urlpatterns=[
	path('index',views.index,name='index'),
	path('login',views.LoginView.as_view(),name='login'),
	path('signup',views.SignupView.as_view(),name='signup'),
	# path('workoutexercise',views.WorkoutExerciseView.as_view(),name="workoutexercise"),
	path('', include(router.urls))
]