import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {
  selectedProduct: any;

  products = [
    {
      id: 1,
      name: 'Toyota',
      description: 'One of the best',
      price: 'P799999.000',
      image: 'https://sites.google.com/site/worldbestcarsonphotos/_/rsrc/1569572680473/italian-cars/Italian%20cars.jpg',
    },
    {
      id: 2,
      name: 'Nissan',
      description: 'Nissan Philippines - The Official Website of Nissan Philippines, providing the latest news, product information and promotions.',
      price: 'P9999999.0000',
      image: 'https://www-asia.nissan-cdn.net/content/dam/Nissan/ph/vehicles/X-Trail/product_code/product_version/overview/17tdieulhd-xtrailhelios106.jpg.ximg.l_4_m.smart.jpg',
    },
    {
      id: 3,
      name: 'Honda',
      description: 'Drive with safety placed at a premium, encased in style. Learn more about the New CR-V. Safety, comfort, and power in every drive. Journey to a whole new driving experience. Athletic Chassis. Touchscreen Systems. Easy-Access Commands.',
      price: 'P1032323.000',
      image: 'https://visor.ph/wp-content/uploads/2020/02/honda-2019-sales-per-model-main.jpg',
    }
  ]

  constructor(
    private router: ActivatedRoute,
    private _globalService: GlobalService
  ) {
    console.log(this.router);
   }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params) => {
        const id = params.id;

        const selected = this.products.filter(
          (product) => {
            return +product.id === +id;
          }
        );

        if (selected.length > 0) {
          this.selectedProduct = selected[0];
          this._globalService.subjectName.next(this.selectedProduct.name);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this._globalService.subjectName.next('');
  }

}
