System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ProductImage, PriceDisplay, ProductDepartment, ProductRow;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * @ProductImage: A component to show a single Product's image
             */
            ProductImage = (function () {
                function ProductImage() {
                }
                ProductImage = __decorate([
                    core_1.Component({
                        selector: 'product-image',
                        host: { class: 'ui small image' },
                        inputs: ['product'],
                        template: "\n\t <img class=\"product-image\" [src]=\"product.imageUrl\">\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductImage);
                return ProductImage;
            })();
            /**
            * @PriceDisplay: A component to show the price of a
            * Product
            */
            PriceDisplay = (function () {
                function PriceDisplay() {
                }
                PriceDisplay = __decorate([
                    core_1.Component({
                        selector: 'price-display',
                        inputs: ['price'],
                        template: "\n\t <div class=\"price-display\">${{ price }}</div>\n \t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PriceDisplay);
                return PriceDisplay;
            })();
            /**
            * @ProductDepartment: A component to show the breadcrumbs to a
            * Product's department
            */
            ProductDepartment = (function () {
                function ProductDepartment() {
                }
                ProductDepartment = __decorate([
                    core_1.Component({
                        selector: 'product-department',
                        inputs: ['product'],
                        template: "\n\t\t <div class=\"product-department\">\n\t\t <span *ngFor=\"#name of product.department; #i=index\">\n\t\t <a href=\"#\">{{ name }}</a>\n\t\t <span>{{i < (product.department.length-1) ? '>' : ''}}</span>\n\t\t </span>\n\t\t </div>\n \t\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductDepartment);
                return ProductDepartment;
            })();
            ProductRow = (function () {
                function ProductRow() {
                }
                ProductRow = __decorate([
                    core_1.Component({
                        selector: 'product-row',
                        inputs: ['product'],
                        host: { 'class': 'item' },
                        template: "\n \t\t<product-image [product]=\"product\"></product-image>\n\t \t<div class=\"content\">\n\t \t<div class=\"header\">{{ product.name }}</div>\n\t \t<div class=\"meta\">\n\t \t<div class=\"product-sku\">SKU #{{ product.sku }}</div>\n\t \t</div>\n\t \t<div class=\"description\">\n\t \t<product-department [product]=\"product\"></product-department>\n\t \t</div>\n\t \t</div>\n\t \t<price-display [price]=\"product.price\"></price-display>\n\t",
                        directives: [ProductDepartment, PriceDisplay, ProductImage]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductRow);
                return ProductRow;
            })();
            exports_1("ProductRow", ProductRow);
        }
    }
});
//# sourceMappingURL=product-row.js.map