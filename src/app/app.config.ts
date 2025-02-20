import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';  // وارد کردن ماژول
// import { NgxSlickCarouselModule } from 'ngx-slick-carousel';  // وارد کردن ماژول


import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()]
};
