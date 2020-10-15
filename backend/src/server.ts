import express from 'express';

const app = express();
app.use(express.json());

app.get('/users/:id', (req, res) => {
    return res.json({ message: "hello" }); 
});

app.listen(3333);