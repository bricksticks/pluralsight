import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root" // This is bad as this is only used in the product detail component but shared with everything!
})
export class ProductDetailGuard implements CanActivate {

    constructor(private router: Router) {
        
    }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        const productId = String(route.paramMap.get('id'));
        
        console.log(productId);

        // TODO (HRC): In your case this does not work as in the example you'd have to introduce
        // knowledge about the products that exist and check if the entered product is part of the existing products.
        if(!productId) {
            
            alert('Invalid product code!');
            this.router.navigate(['/products']);
            
            return false;
        }
            
        return true;
    }

}