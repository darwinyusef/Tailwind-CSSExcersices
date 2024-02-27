import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/api/data', (req, res) => {
    res.send('Hola a todos');
});

app.listen(3000, () => {
    console.log('Servidor Node escuchando en el puerto 3000');
});