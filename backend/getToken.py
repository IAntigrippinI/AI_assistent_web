import requests
import json
import uuid
from hideData import GIGACHAT_API_KEY


def get_token():
    uuid_random = str(uuid.uuid4())

    url = "https://ngw.devices.sberbank.ru:9443/api/v2/oauth"

    payload = "scope=GIGACHAT_API_PERS"
    headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
        "RqUID": uuid_random,
        "Authorization": "Basic " + GIGACHAT_API_KEY,
    }

    response = requests.request(
        "POST", url, headers=headers, data=payload, verify=False
    )
    try:
        return json.loads(response.text)["access_token"]
    except:
        return response.text
