from django.utils import timezone
from .models import Exercise

# Create 10 Exercise instances using Exercise.objects.create
Exercise.objects.create(name="Running", description="Jogging in the park", created_at=timezone.now())
Exercise.objects.create(name="Weightlifting", description="Lifting heavy weights at the gym", created_at=timezone.now())
Exercise.objects.create(name="Yoga", description="Relaxing and stretching exercises", created_at=timezone.now())
Exercise.objects.create(name="Swimming", description="Swimming laps in the pool", created_at=timezone.now())
Exercise.objects.create(name="Cycling", description="Biking through scenic routes", created_at=timezone.now())
Exercise.objects.create(name="Jump Rope", description="Skipping rope for cardio", created_at=timezone.now())
Exercise.objects.create(name="Pilates", description="Core-strengthening exercises", created_at=timezone.now())
Exercise.objects.create(name="Hiking", description="Exploring nature trails on foot", created_at=timezone.now())
Exercise.objects.create(name="Boxing", description="Punching bag and sparring workouts", created_at=timezone.now())
Exercise.objects.create(name="Zumba", description="Dance-based fitness classes", created_at=timezone.now())