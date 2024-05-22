import json

from function_db import (
    create_db,
    insert_messages,
    get_messages,
    create_tables,
    delete_all_messages,
)

create_db()

create_tables()
insert_messages(1, "Как дела?", "Отлично, а у вас?")

insert_messages(1, "Что такое питон", "Это то, на чем ты пишешь, дурак")

print(get_messages(1))

delete_all_messages()
