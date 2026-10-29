const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// 1. กำหนดให้เป็น Array เพื่อให้ใช้งาน .push() ได้
let data = ['wawa'];

app.get('/', (req, res) => {
    res.send("Welcome ");
});

app.get('/deshbord', (req, res) => {
    res.send("deshbord page ");
});

app.get('/snaklist', (req, res) => {
    res.send("dbhcsadi ");
});

app.get('/api/data', (req, res) => {
    console.log('data');
    res.json(data);
});

// 2. เปลี่ยนจาก app.get เป็น app.post
app.post('/api/data', (req, res) => {
    const newEntry = req.body;
    if (newEntry && newEntry.name) {
        data.push(newEntry.name); // 3. push ข้อมูลก่อนส่งสถานะกลับ
        res.status(201).json({ message: "Added successfully", data: data });
    } else {
        res.status(400).send("Bad Request: missing name");
    }
});

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
});