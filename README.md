# DrinksApp

## Configuration

#### 1. Install python

#### 2. Check version 
    python --version

#### 3. Create Virtual Environment 
    python -m venv .venv

#### 4. Activate .venv 
    . .venv/scripts/activate

#### 5. Install Django framework
    pip install django
    pip install djangorestframework

#### 6. Initiate the project 
    django-admin startproject myapp . 

#### 7. Run the server
    python manage.py runserver

- Server will be running 
- By default on http://127.0.0.1:8000/

#### 8. Apply migration
    python manage.py migrate

#### 9. Create admin account
    python manage.py createsuperuser

- login admin page via [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin)
- Note that Server should be running


## Creating your own migration

#### 1. Create a file named `models` in your myapp folder.
#### 2. Copy the code from the `models` file in the repo.
#### 3. Add your `myapp` folder in `INSTALLED APPS` in setting.py
#### 4. Create migrate using following command
    python manage.py makemigrations myapp
#### 5. Migrate to databse
    python manage.py migrate
#### 6. Reflect change in remote admin
Create admin.py folder in myapp
Copy the code from admin.py in repo


## Useful Django commands

#### To check all the available commands in django-admin
    django_admin

#### To check all the available commands in manage.py
    python manage.py

# Notes

## Getting JSON response
Rsponse() method uses to return the response data. In order to get the data in JSON format we need to add .json extension in url (http://127.0.0.1:8000/drinks.json)
To implement this in source code, following should be done:

In urls.py => 
from rest_framework.urlpatterns import format_suffix_patterns
urlpatterns = [
    ...paths...
]
urlpatterns = format_suffix_patterns(urlpatterns)

In views.py =>
In http method set parameter format=None
example: def drink_detail(request,id,format=None):

## Cross-Origin Resourse Sharing (CORS)
    pip install django-cors-headers

In settings.py =>

INSTALLED_APPS = [
    # ...
    'corsheaders',
    # ...
]

In settings.py =>

MIDDLEWARE = [
    # ...
    'corsheaders.middleware.CorsMiddleware',
    # ...
]

In setting.py =>

CORS_ALLOWED_ORIGINS = [
    "http://127.0.0.1:5500",
    # Add other origins as needed
]


