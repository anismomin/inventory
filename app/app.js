System.register(['angular2/core', 'angular2/platform/browser', './product-list', './product'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, product_list_1, product_1;
    var InventryApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (product_list_1_1) {
                product_list_1 = product_list_1_1;
            },
            function (product_1_1) {
                product_1 = product_1_1;
            }],
        execute: function() {
            InventryApp = (function () {
                function InventryApp() {
                    this.products = [
                        new product_1.Product('MYSHOES', 'Black Running Shoes', '/resources/images/favicon-32x32.png', ['Men', 'Shoes', 'Running Shoes'], 109.99),
                        new product_1.Product('NEATOJACKET', 'Blue Jacket', '/resources/images/favicon-32x32.png', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
                        new product_1.Product('NICEHAT', 'A Nice Black Hat', '/resources/images/favicon-32x32.png', ['Men', 'Accessories', 'Hats'], 29.99)
                    ];
                }
                InventryApp.prototype.productWasSelected = function (product) {
                    console.log('Product clicked: ', product);
                };
                InventryApp = __decorate([
                    core_1.Component({
                        selector: 'inventory-app',
                        directives: [product_list_1.ProductList],
                        template: "\n\t\t<div class=\"inventory-app\">\n\t\t <products-list\n\t\t [productList]=\"products\"\n\t\t (onProductSelected)=\"productWasSelected($event)\">\n\t\t </products-list>\n\t\t </div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], InventryApp);
                return InventryApp;
            })();
            browser_1.bootstrap(InventryApp);
        }
    }
});
//# sourceMappingURL=app.js.map