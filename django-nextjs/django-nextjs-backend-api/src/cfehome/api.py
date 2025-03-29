# import helpers
from ninja import NinjaAPI, Schema

from ninja_extra import NinjaExtraAPI
from ninja_jwt.authentication import JWTAuth
from ninja_jwt.controller import NinjaJWTDefaultController

# api = NinjaAPI() # for JWT we change this to NinjaExtraAPI
api = NinjaExtraAPI()
api.register_controllers(NinjaJWTDefaultController)
api.add_router("/waitlists/", "waitlists.api.router") # this is waitlists app router



# ORM stuff here
class userSchema(Schema):
    username: str
    is_authenticated: bool
    # is not request.user.is_authenticated
    email: str = None

# these are the end points
@api.get("/hello")
def hello(request):
    print(request)
    return {'message':"Hello world"}

# this not a page it is a responce from database, it not added in routes.
# adding auth protects the page from unauthorized access
# this is similiar to @login_required in django
@api.get("/me", response=userSchema, auth=JWTAuth()) 
def me(request):
    print(request)
    return request.user