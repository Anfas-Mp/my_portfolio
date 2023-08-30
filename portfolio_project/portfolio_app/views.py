from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')
def about(request):
    return render(request,'about.html')
def timeline(request):
    return render(request,'timeline.html')
def project(request):
    return render(request,'project.html')
def contact(request):
    return render(request,'contact.html')