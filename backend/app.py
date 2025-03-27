from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3
import random

app = Flask(__name__)
CORS(app, origins=["http://localhost:8000"])

DB_PATH = "quiz.db"

@app.route("/api/quiz")
def get_quiz():
    # DBに接続
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # 1問ランダムに取得
    cursor.execute("""
        SELECT id, question
        FROM questions
        ORDER BY RANDOM()
        LIMIT 1;
    """)
    question_row = cursor.fetchone()

    if not question_row:
        return jsonify({"error": "No question found"}), 404
    
    question_id, question_text = question_row

    # 選択肢を取得
    cursor.execute("""
        SELECT text, is_correct
        FROM choices
        WHERE question_id = ?;
    """, (question_id,))
    choices_data = cursor.fetchall()
    conn.close()

    # シャッフル
    random.shuffle(choices_data)
    choices = [text for text, _ in choices_data]
    correct_index = next(i for i, (_, is_correct) in enumerate(choices_data) if is_correct)

    return jsonify({
        "quesiton_id": question_id,
        "question": question_text,
        "choices": choices,
        "correct_index": correct_index
    })

if __name__ == "__main__":
    app.run(debug=True)