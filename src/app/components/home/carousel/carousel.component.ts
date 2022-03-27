import {Component, OnInit} from '@angular/core';
import {SwiperOptions} from "swiper";
import {Product} from './product.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  config: SwiperOptions = {
    pagination: {el: '.swiper-pagination', clickable: true},
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    spaceBetween: 10,
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      500: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2.5
      },
      300: {
        slidesPerView: 2.5
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  };

  products: Product[] = [
    {
      image: 'assets/img/image.png',
      title: 'Producto 1',
      price: 130,
    },
    {
      image: 'assets/img/image.png',
      title: 'Producto 2',
      price: 130,
    },
    {
      image: 'assets/img/image.png',
      title: 'Producto 3',
      price: 130,
    },
    {
      image: 'assets/img/image.png',
      title: 'Producto 4',
      price: 130,
    },
    {
      image: 'assets/img/image.png',
      title: 'Producto 5',
      price: 130,
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
