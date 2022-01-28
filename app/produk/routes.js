const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const ProductController = require('./controller');

router.post('/produk', upload.single('image'), ProductController.addProduct);
router.get('/produk', ProductController.getProduct);
router.put('/produk/:id', ProductController.updateProduct);
router.delete('/produk/:id', ProductController.deleteProduct);

module.exports = router;