import {Component} from 'angular2/core'
import {Product} from './product'


/**
 * @ProductImage: A component to show a single Product's image
 */
 @Component({
	selector: 'product-image',
	host: {class: 'ui small image' },
	inputs: ['product'],
	template: `
	 <img class="product-image" [src]="product.imageUrl">
	`
})
class ProductImage {
	 product: Product;
	
}

/**
* @PriceDisplay: A component to show the price of a
* Product
*/
 @Component({
	selector: 'price-display',
	inputs: ['price'],
	template: `
	 <div class="price-display">\${{ price }}</div>
 	`
 })
class PriceDisplay {
	 price: number;
	 
}

 /**
 * @ProductDepartment: A component to show the breadcrumbs to a
 * Product's department
 */
 @Component({
	 selector: 'product-department',
	 inputs: ['product'],
	 template: `
		 <div class="product-department">
		 <span *ngFor="#name of product.department; #i=index">
		 <a href="#">{{ name }}</a>
		 <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
		 </span>
		 </div>
 		`
})
class ProductDepartment {	 
	product: Product;
}

@Component({
	selector: 'product-row',
	inputs: ['product'],
	host: {'class': 'item' },
	template: `
 		<product-image [product]="product"></product-image>
	 	<div class="content">
	 	<div class="header">{{ product.name }}</div>
	 	<div class="meta">
	 	<div class="product-sku">SKU #{{ product.sku }}</div>
	 	</div>
	 	<div class="description">
	 	<product-department [product]="product"></product-department>
	 	</div>
	 	</div>
	 	<price-display [price]="product.price"></price-display>
	`,
	directives: [ProductDepartment, PriceDisplay, ProductImage]
})
export class ProductRow {
	product: Product;
}
