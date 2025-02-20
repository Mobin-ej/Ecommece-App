import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  standalone: true,  // نشان دادن که کامپوننت Standalone است
  imports: [SlickCarouselModule, CommonModule]  // ایمپورت ماژول SlickCarousel
})
export class ImageSliderComponent implements OnInit {
  productsList = [
    { image: 'https://via.placeholder.com/600x300?text=Image+1' },
    { image: 'https://via.placeholder.com/600x300?text=Image+2' },
    { image: 'https://via.placeholder.com/600x300?text=Image+3' }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: true,
    infinite: true
  };

  ngOnInit() {}
}
