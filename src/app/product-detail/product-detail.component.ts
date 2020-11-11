import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  item: any

  constructor(private route: ActivatedRoute, private router: Router ) {
    this.route.queryParams.subscribe(param=>{
      console.log('params ', param);
      if(this.router.getCurrentNavigation().extras.state){
        this.item  = this.router.getCurrentNavigation().extras.state.item
      }else{
        // fetch from your api
        //http.get param.id 
        this.item =  {   
          "id": 4, 
           "title": "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language", 
           "desc": "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language 7th Edition",
           "price": 53.00,
           "image": "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg",
           "ratings": 5
       }

      }
    })
   
   }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log('whats the id ', id)
    //htttp.get(product with id)
  }

}
