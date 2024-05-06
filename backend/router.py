from fastapi import APIRouter
from init import chat

router = APIRouter(prefix="/gigachat")


@router.get("/quastion")
def get_answer(quastion):
    return chat.get_answer(quastion)
