import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs/internal/Subscription";
import { IProduct } from "./product.interface";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private _productsSubscription!: Subscription;
  private _productsFilterValue: string = "cart";
  private _products: IProduct[] = [];

  errorMessage: string = "";
  pageTitle: string = 'Product List';
  imageButtonLabel: string = "Show Stuff";
  imageWidth: number = 50;
  imageMargin: number = 2;
  imageVisibility: boolean = false;

  private containsToken(text: string, token: string): boolean {
    
    return text.includes(token);
  }

  private filterProducts(filterValue: string): IProduct[] {

    console.log("Filtered by: %s", this.productsFilterValue)
    return this._products.filter((product: IProduct) => this.containsToken(product.productName.toLowerCase(), 
      filterValue.toLowerCase()) );
  }

  constructor(private productService: ProductService) {

  }

  get productsFilterValue(): string {

    return this._productsFilterValue;
  }

  set productsFilterValue(filterValue: string) {

    this._productsFilterValue = filterValue;
    console.log("products filter:", this._productsFilterValue)
  }

  get filteredProducts(): IProduct[] {

    let result: IProduct[] = this.filterProducts(this.productsFilterValue);
    console.log(result)

    return result;
  }


  ngOnInit(): void {

    console.log("In OnInit")
    this.productsFilterValue = "";
    
    this._productsSubscription = this.productService.getProducts().subscribe({

      next: products => this._products = products,
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {

    this._productsSubscription.unsubscribe();
  }

  toggleImage(): void {

    console.log(this.imageVisibility)
    this.imageVisibility = !this.imageVisibility
    this.toggleButtonImageLabel()
  }

  toggleButtonImageLabel(): void {
    this.imageButtonLabel = this.imageVisibility ? "Hide Images" : "Show Images"
  }


  onRatingClicked(message: string): void {

    console.log(message)
  }

}