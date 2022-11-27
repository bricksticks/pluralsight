import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product.interface';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  errorMessage: string ="";
  pageTitle: string = "Product Detail";
  product: IProduct | undefined;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let productCode : string = String(this.route.snapshot.paramMap.get('productCode'));
    this.pageTitle +=`: ${productCode}`;

    this.productService.getProduct(productCode).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });


  }

  onBack(): void {

    this.router.navigate(['/products']);
  }
}
