import requests
import json

from getToken import get_token


class GigaChat_Client:
    def __init__(self, base_url) -> None:
        self.base_url = base_url

    def get_answer(self, quastion: str) -> str:

        payload = json.dumps(
            {
                "model": "GigaChat",
                "messages": [{"role": "user", "content": quastion}],
                "temperature": 1,
                "top_p": 0.1,
                "n": 1,
                "stream": False,
                "max_tokens": 512,
                "repetition_penalty": 1,
            }
        )
        headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + get_token(),
        }

        resp = requests.request(
            "POST", url=self.base_url, headers=headers, data=payload, verify=False
        )
        return json.loads(resp.text)["choices"][0]["message"]["content"]
