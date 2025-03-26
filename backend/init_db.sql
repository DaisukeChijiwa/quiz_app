-- init_db.sql
DROP TABLE IF EXISTS choices;
DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    genre TEXT NOT NULL,
    difficulty TEXT NOT NULL,
    question TEXT NOT NULL
);

CREATE TABLE choices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question_id INTEGER NOT NULL,
    text TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL CHECK (is_correct IN (0, 1)),
    FOREIGN KEY (question_id) REFERENCES question(id)
);

-- sample question
INSERT INTO questions (genre, difficulty, question)
VALUES ('python', 'easy', 'Pythonでリストを作成する正しい構文はどれ？');

INSERT INTO choices (question_id, text, is_correct) VALUES
    (1, '[1, 2, 3]', 1),
    (1, '(1, 2, 3)', 0),
    (1, '{1, 2, 3}', 0),
    (1, '<1, 2, 3>', 0);