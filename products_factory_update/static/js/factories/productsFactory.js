

app.factory('productsFactory', [
'$http',
function($http) {
    var factory = {};
    var products = [
        {name: 'Apples', price: '1', qty: 50},
        {name: 'Car', price: '250000',qty: 50},
        {name: 'Computer', price: '1500',qty: 50},
        {name: 'Dog', price: '1000',qty: 50},
        {name: 'Hair Tie', price: '5',qty: 50}
    ];

        factory.addProduct = function(data, callback) {
            data.qty = 50;
            products.push(data);
            callback(products);
        }
        factory.index = function(callback) {
            callback(products);
        }
        factory.buyProduct = function(data, callback) {
            if (Number.isInteger(data.qty)) {
                if (products[data.id].qty - data.qty > 0) {
                    products[data.id].qty -= data.qty;
                } else {
                    products[data.id].qty = 0;
                }
            }
            callback(products);
        }
        factory.deleteProduct = function(id, callback) {
            products.splice(id, 1);
            callback(products);
        }
        return factory;
}]);
