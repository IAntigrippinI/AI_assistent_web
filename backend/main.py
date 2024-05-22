from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from gigachat import GigaChat_Client
from config import BASE_URL
from router import router as routers

origins = [
    "http://127.0.0.1:5173",
    "http://localhost:5173",
    "http://127.0.0.1:3306",
    "http://localhost:3306",
]

app = FastAPI()
app.include_router(routers)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
