const express = require('express');
const app = express();
const pageRoutes = require('./routes/page.routes');

// Konfigurasi View Engine
app.set('view engine', 'ejs');

// Folder Aset Statis
app.use(express.static('public'));

// app.use(express.urlencoded({ extended: true }));

// Memasang Router
app.use('/', pageRoutes);

// Handling 404
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Menjalankan Server
app.listen(3000, () => {
    console.log('Server MVC Aktif!');
});