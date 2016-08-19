

            app.controller('productsController', [
            '$scope',
            'productsFactory',
            function($scope, productsFactory) {

                function setProducts(data) {
                    $scope.products = data;
                    $scope.product = {};
                }

                $scope.product = {};
                $scope.products = [];

                $scope.index = function() {
                    productsFactory.index(setProducts);
                }

                $scope.index();
                $scope.addProduct = function() {
                    productsFactory.addProduct($scope.product, setProducts);
                }
                $scope.deleteProduct = function(id) {
                    productsFactory.deleteProduct(id, setProducts);
                }

            }
        ]);

        app.controller('ordersController', [
            '$scope',
            'productsFactory',
            function($scope, productsFactory) {
                function setProducts(data) {
                    $scope.products = data;
                    $scope.product = {};
                }
                $scope.products = [];

                productsFactory.index(setProducts);
                $scope.buyProduct = function(id) {
                    productsFactory.buyProduct({
                        id: id,
                        qty: 1
                    }, setProducts);
                }
            }
        ]);
