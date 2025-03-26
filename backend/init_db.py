import sqlite3
with open("init_db.sql", "r") as f:
    sql = f.read()

conn = sqlite3.connect("quiz.db")
conn.executescript(sql)
conn.commit()
conn.close()

print("Database initialized.")