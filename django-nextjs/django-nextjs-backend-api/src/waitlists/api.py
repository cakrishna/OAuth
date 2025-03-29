from typing import List
import json
from django.shortcuts import get_object_or_404
from ninja import Router

from ninja_jwt.authentication import JWTAuth

from .models import WaitlistEntry
from .schemas import (
    WaitlistEntryListSchema,
    WaitlistEntryDetailSchema
)


router = Router()


# /api/waitlists/
@router.get("", response=List[WaitlistEntryListSchema], auth=JWTAuth())
def list_wailist_entries(request):
    qs = WaitlistEntry.objects.all()
    return qs
# qs is a queryset


@router.get("{entry_id}/", response=WaitlistEntryDetailSchema, auth=JWTAuth())
def get_wailist_entry(request, entry_id:int):
    # qs = WaitlistEntry.objects.all()
    # return qs
    obj = get_object_or_404(WaitlistEntry, id=entry_id)
    return obj
# entry/obj is a single object
# entry_id is a single integer
# get_object_or_404 is a django shortcut function
# this function is used to get a single object from the database
