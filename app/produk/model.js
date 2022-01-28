const sequelize = require('../../config/connection');
const {DataTypes} = require('sequelize');

const Product = sequelize.define('produk', {
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    harga_produk : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: DataTypes.TEXT,
});

(async ()=>{
    await Product.sync();
})();

module.exports = Product;