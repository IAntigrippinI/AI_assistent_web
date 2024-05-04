from fastapi import FastAPI

from gigachat import GigaChat_Client
from config import BASE_URL
from router import router as routers

app = FastAPI()
app.include_router(routers)
