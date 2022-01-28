const Product = require('./model');
const path = require('path');
const fs = require('fs');
const {Op} = require('sequelize');

const addProduct = async (req,res)=>{
    const {nama, stock, harga_produk} = req.body;
    const image = req.file;
    if(image){
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        try{
            const result = await Product.create({ nama, stock, harga_produk, image: `http://localhost:4000/public/${image.originalname}` });
            res.send({
                status: 'Ok',
                response: result,
            });
        } catch(err) {
            res.send({
                status: 'failed',
                response: err,
            });
        }
    }
};

const getProduct = async (req,res)=>{
    try {
        let result = await Product.findAll();
        res.send({
            status: 'Ok',
            response: result
        });

    } catch (error) {
        res.send({
            status: 'failed',
            response: error,
        })
    }
};

const updateProduct = async (req, res)=>{
    const {nama, stock, harga_produk} = req.body;
    const image = req.file;
    const id = req.params.id;

    if (image){
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        try {
            let result = await Product.update(
                {nama, stock, harga_produk, image: `http://localhost:4000/public/${image.originalname}`},
                {where: {id}}
            );
            res.send({
                status: 'Ok',
                response: result
            })
        } catch (error) {
            res.send({
                status: 'Failed',
                response: error,
            })
        }
    } else {
        try {
            let result = await Product.update(
                {nama, stock, harga_produk},
                {where: {id}}
            );
            res.send({
                status: 'Ok',
                response: result
            })
        } catch (error) {
            res.send({
                status: 'Failed',
                response: error,
            })
        }
    }
};

const deleteProduct = async (req,res)=>{
    const id = req.params.id;
    try {
        let result = await Product.destroy({
            where: {id}
        })
        res.send({
            status: 'Ok',
            response: result
        })
    } catch (error) {
        res.send({
            status: 'Ok',
            response: error
        })
    }
}

module.exports = {
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct
}