import {Component} from 'angular2/core'
import {bootstrap} from 'angular2/platform/browser'
import {ProductList} from './product-list'
import {Product} from './product'

@Component({
	selector: 'inventory-app',
	directives: [ProductList],
	template: `
		<div class="inventory-app">
		 <products-list
		 [productList]="products"
		 (onProductSelected)="productWasSelected($event)">
		 </products-list>
		 </div>
	`
})
class InventryApp {
	
	products: Product[];

	constructor() {
		this.products = [
			new Product(
				 'MYSHOES', 'Black Running Shoes',
				'/resources/images/favicon-32x32.png',
				['Men', 'Shoes', 'Running Shoes'],
				 109.99),
			 new Product(
				 'NEATOJACKET', 'Blue Jacket',
				 '/resources/images/favicon-32x32.png',
				['Women', 'Apparel', 'Jackets & Vests'],
				 238.99),
			new Product(
				 'NICEHAT', 'A Nice Black Hat',
				'/resources/images/favicon-32x32.png',
				['Men', 'Accessories', 'Hats'],
				 29.99) 
		];

	}

	productWasSelected(product: Product): void {
		console.log('Product clicked: ', product);
		
	}

}

bootstrap(InventryApp)
