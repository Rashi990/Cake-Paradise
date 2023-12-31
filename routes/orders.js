const express = require('express');
const orders = require('../models/orders');

const router = express.Router();

//add orders
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
    router.get('/orders', async(req,res) => {

        try{
           const ordersList = await orders.find().exec(); 
           res.status(200).json({
                success:true,
                existingOrders: ordersList,
           });
        }catch(error){
            res.status(400).json({
                error,
            });
        }
            
    });

    //update orders
    router.put('/order/update/:id', async (req,res)=>{

        try{
            const updateOrder = await orders.findByIdAndUpdate(
                req.params.id,
                {$set: req.body},
                {new:true}
            );

            if(!updateOrder){
                return res.status(400).json({
                    success:false,
                    message: "Order not updated"
                });
            }
            res.status(200).json({
                success:true,
                message:"Order updated successfully",
                //updateOrder,
            });

        }catch(error){
            res.status(400).json({
                success:false,
                error,
            });
        }

       
    });

    //delete order
    router.delete('/order/delete/:id', async (req,res)=>{
        try {
            const deleteOrder = await orders.findByIdAndDelete(
                req.params.id,

            );

            if(!deleteOrder){
                return res.status(400).json({
                    success:false,
                    message: "Order cannot be deleted"
                });
            }res.status(200).json({
                success:true,
                message: "Order successfully deleted",
                //deleteOrder,
            })

        } catch (error) {
            res.status(400).json({
                success:false,
                error,
            });
            
        }
    });


module.exports = router;