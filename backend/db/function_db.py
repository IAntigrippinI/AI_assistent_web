import mysql.connector
import json


def create_db():
    is_exist = False
    db = mysql.connector.connect(host="localhost", user="root", passwd="")
    cursor = db.cursor()
    cursor.execute("SHOW DATABASES")
    for database in cursor:
        if "GigaChatWeb" in database[0]:
            is_exist = True
            print("db does not exist")
    if not is_exist:
        cursor.execute("create database GigaChatWeb")


def connect():
    db = mysql.connector.connect(
        host="localhost", user="root", passwd="", database="GigaChatWeb"
    )
    return db


def create_tables():
    db = connect()
    cursor = db.cursor()
    cursor.execute(
        """CREATE TABLE IF NOT EXISTS users(
                id int AUTO_INCREMENT PRIMARY KEY,
                subscribe BLOB,
                time_zone int,
                tg_id int UNIQUE)"""
    )

    cursor.execute(
        """CREATE TABLE IF NOT EXISTS messages(
                id int AUTO_INCREMENT PRIMARY KEY,
                user_id int,
                user_message VARCHAR(255),
                gig_answer VARCHAR(255)
                )"""
    )

    db.close()


def insert_messages(user_id, user_message: str, bot_answer: str) -> str:
    db = connect()
    cursor = db.cursor()
    cursor.execute(
        f"""INSERT INTO messages (user_id, user_message, gig_answer) VALUES ({user_id}, '{user_message}', '{bot_answer}')"""
    )
    db.commit()
    db.close()


def get_messages(user_id: int) -> dict:
    result = []
    db = connect()

    cursor = db.cursor()
    cursor.execute(
        f"""SELECT user_message, gig_answer FROM messages WHERE user_id = {user_id} """
    )
    data = cursor.fetchall()
    db.close()
    for i in range(len(data)):
        result.append({"usermessage": data[i][0], "answer": data[i][1]})
    with open("result.json", "w") as fp:
        json.dump(result, fp)

    return "done"


def delete_all_messages():
    db = connect()
    cursor = db.cursor()
    cursor.execute("""DELETE FROM messages""")
    db.commit()
    db.close()
