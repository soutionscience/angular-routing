import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products = [
    {
        "id": 1,
    "title": "xbox one x 1TB",
    "desc": "Microsoft Xbox One X 1Tb Console With Wireless Controller: Xbox One X Enhanced, Hdr, Native 4K, Ultra Hd",
    "price": 450.00,
     "image": "https://images-na.ssl-images-amazon.com/images/I/61H3Od2C64L._SL1400_.jpg",
     "ratings": 4},
     {   
        "id": 2,
        "title": "PlayStation 4 Slim 1TB",
         "desc": "PlayStation 4 Slim 1TB Console - Only On PlayStation Bundle",
         "price": 488.00,
         "image": "https://images-na.ssl-images-amazon.com/images/I/814Cwlg1JaL._SL1500_.jpg",
         "ratings": 5
     },
     {
        "id": 3,
        "title": "Pro Angular 9: Build Powerful and Dynamic Web Apps", 
        "desc": "Pro Angular 9: Build Powerful and Dynamic Web Apps 4th ed. Edition",
         "price": 28.88,
         "image": "https://images-na.ssl-images-amazon.com/images/I/418hZfmNkXL._SX348_BO1,204,203,200_.jpg",
         "ratings": 3
     },
     {   
        "id": 4, 
         "title": "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language", 
         "desc": "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language 7th Edition",
         "price": 53.00,
         "image": "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg",
         "ratings": 5
     },
     {    "id": 5, 
         "title":"Lavazza Super Crema Whole Bean Coffee Blend, Medium Espresso Roast",
         "desc": "Lavazza Super Crema Whole Bean Coffee Blend, Medium Espresso Roast, 2.2 Pound (Pack of 1)",
         "price": 54.36,
         "image": "https://images-na.ssl-images-amazon.com/images/I/61fpw9inWTL._SL1296_.jpg",
         "ratings": 2
     }
  ]

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }
  selectProduct(product){
   // console.log("product selected")
    //this.router.navigate(['product-detail', product.id]);

    let navigationExtras: NavigationExtras ={
      queryParams:{
        'id': product.id
      },
  
      state:{
        item: product
      }
    }
    this.router.navigate(['product-detail'], navigationExtras)
  }

}
