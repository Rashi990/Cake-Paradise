const express = require('express');
const orders = require('../models/orders');

const router = express.Router();

//Save orders
router.post('/order/save', async (req, res) => {
    try {
      const newOrder = new orders(req.body);
      await newOrder.save();
      res.status(200).json({
        success: "Order saved successfully"
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  });


  //get orders
 // router.get('/orders')


module.exports = router;