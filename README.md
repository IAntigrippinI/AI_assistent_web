# AI_assistent_web
### Данный проект прдеставляет собой Веб-сервис, представляющий возможность общения с нейронной сетью GigaChat
### Для реализации серверной части выбрана библиотека Python **FastAPI**. Запросы к нейросети производятся с использованием библиотеки **requests**
### Для реализации клиент-части выбрана библиотека Java Script - **React.js**
### Общение между frontend и backend частями осуществляется с помощью библиотеки **axios**
### Как использовать:
[Установка Python](https://skillbox.ru/media/code/kak_zapustit_python/)s

[Установка npm](https://translated.turbopages.org/proxy_u/en-ru.ru.a84e15ac-664dabef-d1fb0b59-74722d776562/https/kinsta.com/blog/how-to-install-node-js/)

- Создать виртуальное окружение для Python:
   ```
   cd backend
   python -m venv venv
   ```
- Активировать виртуалное окружение:
   ```
   .\venv\Scripts\activate
   ```
- Установить зависимости:
   ```
   pip install -r requirements.txt
   ```
- Запустить localhost для backend(Python):
   ```
   uvicorn main:app --reload
   ```
- Запустить новый терминал и скачать библиотеки для React.js:
  ```
  cd frontend
  npm install antd --save
  npm install -D tailwindcss
  npx tailwindcss init
  npm install axios
  ```
- Запустить:
  ```
  npm run dev
  ```
- Перейти по ссылке, отображенной в терминале

## Возможности
 - [X] Отправка вопроса нейросети
 - [X] Вывод ответа нейросети
## В будущем:
 - [ ] Сохранение диалога в базе данных и его отображение при входе на сайт
 - [ ] Возможность просить нейросеть разбить одну задачу на подзачи и выделить сроки выполнения каждого пункта
 - [ ] Сохранение подзадач в базу данных
 - [ ] Отображение текущих задач
 - [ ] Возможность помечать выполненные задания
 - [ ] Улучшение оформления сайта