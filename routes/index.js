// import express
import express from "express";
// import controllers
import {
    getCarts,
    getCartById, 
    saveCart, 
    deleteCart } from "../controllers/CartController.js";
 
    // express router
const router = express.Router();
 
// Route get All Cart
router.get('/', getCarts);
// Route get single Cart
router.get('/:id', getCartById);
// Route CREATE Cart
router.post('/', saveCart);
// Route DELETE Cart
router.delete('/:id', deleteCart);
 
// export router
export default router;