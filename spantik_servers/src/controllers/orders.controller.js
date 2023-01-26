const ordersService = require('../services/orders.service');

//this function will return all the cart products
const getOrdersProducts = async(req, res) => {
    await ordersService.getOrdersProducts(req)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

 //this function will return all the order of the single user
 const getOrdersbyId = async(req,res) => {
    await ordersService.getOrdersbyId(req)
    .then((data)=>{
        res.send(data);
     })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    })
 };

//this function will add all the cart products
const postOrder = async(req, res) => {
    await ordersService.postOrder(req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

//this function will delete item by id 
const deleteOrderbyId = async(req, res) => {
    await ordersService.deleteOrderProductbyId(req)
        .then((data) => {
            if (data === 1) {
                res.status(200).json('Successfully deleted');
            } else {
                res.send("not found");
            }
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

//this function will update item by id 
const updateOrderbyId = async(req, res) => {
    await ordersService.updateOrderbyId(req)
        .then((data) => {
            if (data == 1) {
                res.status(200).json('Successfully updated');
            } else {
                res.send("not found");
            }
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

module.exports = {
    getOrdersProducts,
    getOrdersbyId,
    postOrder,
    deleteOrderbyId,
    updateOrderbyId
};