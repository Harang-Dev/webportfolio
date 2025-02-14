const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors()); 

// 데이터베이스 연결
const db = new sqlite3.Database('./db/board.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the board database.');
});

// 게시판 테이블 생성
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS board (id INTEGER PRIMARY KEY AUTOINCREMENT, writer TEXT, title TEXT, description TEXT)");
});

app.use(express.json());

// 게시글 목록 조회
app.get('/post-detail', (req, res) => {
  db.all("SELECT * FROM board", [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

// 게시글 작성
app.post('/board', (req, res) => {
  const { writer, title, description } = req.body;
  db.run("INSERT INTO board (writer, title, description) VALUES (?, ?, ?)", [writer, title, description], function (err) {
    if (err) {
      return console.log(err.message);
    }
    res.json({ id: this.lastID, writer, title, description });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
