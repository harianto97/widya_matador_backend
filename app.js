const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
const ProductRoutes = require('./app/produk/routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));

app.use('/api', ProductRoutes);

app.use((req,res,next)=>{
    res.status(404);
    res.send({
        status: 'Failed',
        message: `Resources ${req.originalUrl} Not Found`
    });
});

app.listen(port, ()=>console.log(`App Berjalan pada : http://localhost:${port}`));