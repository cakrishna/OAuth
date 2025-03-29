from typing import List, Any, Optional
from datetime import datetime
from ninja import Schema
from pydantic import EmailStr

# data we want to send into the API
# theses are the schemas similar to the pydantic models
# here we are using ninja schema similar to pydantic schema
class WaitlistEntryCreateSchema(Schema):
    # Create -> Data
    # WaitlistEntryIn
    email: EmailStr
    # email: str

# class ErrorWaitlistEntryCreateSchema(Schema):
#     # Create -> Data
#     # WaitlistEntryIn
#     email: List[Any]
#     # non_field_errors: List[dict] = []


class WaitlistEntryListSchema(Schema):
    # List -> Data
    # WaitlistEntryOut
    id: int
    email: EmailStr
    # updated: datetime
    # timestamp: datetime
    # description: Optional[str] = ""


class WaitlistEntryDetailSchema(Schema):
    # Get -> Data
    # WaitlistEntryOut
    id: int
    # email: str
    email: EmailStr
    updated: datetime
    timestamp: datetime
    # description: Optional[str] = ""


# class WaitlistEntryUpdateSchema(Schema):
#     # Put -> Data
#     # WaitlistEntryOut
#     # id: int
#     description: str = ""