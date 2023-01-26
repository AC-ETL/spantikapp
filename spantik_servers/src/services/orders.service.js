const db = require('../models')
const Orders = db.Orders;
const OrderDetails = db.OrderDetails;
const SubCatProducts = db.SubcatProducts;

//get all products and specific products 
const getOrdersProducts = async(userBody) => {
     //from this condition we will get the list of the product
     const getOrdersProducts = await Orders.findAll({
        include:{
            model:OrderDetails,
            include:[{
                 model: SubCatProducts
            }]
        }
    });
    return getOrdersProducts;
};

//that will return orders of single user
const  getOrdersbyId = async(userBody) => {

    const getProductQueryString = await Orders.findAll({
        where:{
            userId: userBody.params.id
        },
        include:{
            model : OrderDetails,
            include:[{
                model : SubCatProducts
            }]
        }
    });
    // console.log(getProductQueryString.reverse(),">>>>>>>>>>>>><<<<<<<<<<<<<<<<")
// >>>>>>>>>>>>>>>>>>>>>>> In order last order top in app
    // return getProductQueryString.reverse();
    return getProductQueryString;
};

//data insert into two tables at a time, in orders table and in order details
const postOrder = async(userBody) => {
    const postOrder = await Orders.create({
        userId: userBody.userId,
        totalPrice: userBody.totalPrice,
        status: userBody.status,
        shipDate: userBody.shipDate,
    });
    console.log(postOrder.totalPrice);
    let postOrderDetails;
    for(let i = 0; i<userBody.orderdetails.length; i++){
         postOrderDetails = await OrderDetails.create({
            orderId : postOrder.id,
            subCatId : userBody.orderdetails[i].subCatId,
            quantity : userBody.orderdetails[i].quantity,
            price : userBody.orderdetails[i].product.price,
            productId : userBody.orderdetails[i].productId,
    });
}
    return postOrderDetails;
};


const deleteOrderProductbyId = async(userBody) => {
    const findRow = await Orders.findOne({
        where: {
            id: userBody.params.id
        }
    });
    const deleteOrderDetailProduct = await OrderDetails.destroy({
        where: {
            orderId: findRow.id
        }
    });
    if (deleteOrderDetailProduct === 1) {
        const deleteOrdersProduct = await Orders.destroy({
            where: {
                id: findRow.id
            }
        });
        return deleteOrdersProduct
    } else {
        return 'Record not found.'
    }
};


const updateOrderbyId = (async(userBody) => {
    let updated = await Orders.update({
        status: userBody.body.status,
        shipDate: userBody.body.shipDate,
        

    }, { where: { id: userBody.params.id } });
    console.log(updated);
    return updated;
});

module.exports = {
    getOrdersProducts,
    getOrdersbyId,
    postOrder,
    deleteOrderProductbyId,
    updateOrderbyId
};