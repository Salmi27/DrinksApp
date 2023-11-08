# DrinksApp

Install python

Check version 
    >> python --version

Create Virtual Environment 
    >> python -m venv .venv

Activate .venv 
    >> . .venv/scripts/activate

Install Django framework
    >> pip install django
    >> pip install djangorestframework

Initiate the project 
    >> django-admin startproject myapp . 

Run the server
    >> python manage.py runserver
    [server will be running (by default on http://127.0.0.1:8000/)]

Apply migration
    >> python manage.py migrate

Crete admin account
    >> python manage.py createsuperuser
    [login admin page via http://127.0.0.1:8000/admin (Server should be running)]




Useful Django commands

To check all the available commands in django-admin
    >> django_admin

To check all the available commands in manage.py
    >> python manage.py
