System.register([], function(exports_1) {
    var Product;
    return {
        setters:[],
        execute: function() {
            Product = (function () {
                function Product(sku, name, imageUrl, department, price) {
                    this.sku = sku;
                    this.name = name;
                    this.imageUrl = imageUrl;
                    this.department = department;
                    this.price = price;
                }
                return Product;
            })();
            exports_1("Product", Product);
        }
    }
});
//# sourceMappingURL=product.js.map