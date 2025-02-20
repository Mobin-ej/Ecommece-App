import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICategory, IProduct, IProducts } from '../../../types/app.interface';
import { ProductService } from '../../../services/product.service';
import { ImageSliderComponent } from "../../../components/image-slider/image-slider.component";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',

})
export class ProductsComponent implements OnInit {


  isSidePanelVisible: boolean = false;
  productObj: IProduct = {
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    imageInput: ''
  };

  categoryList: ICategory[] = []
  productsList: IProducts[] = []
  addProductForm!: FormGroup;


  constructor(private productService: ProductService, private fb: FormBuilder, private http: HttpClient) { }
  ngOnInit(): void {
    // this.handleGetAllCategory();
    this.handleGetAllProducts()


    this.addProductForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      discountPercentage: [null],
      rating: [null],
      stock: [null],
      brand: [''],
      category: [''],
      thumbnail: [''],
      imageInput: ['']
    })



  }


  submitProduct(): void {
    if (this.addProductForm.valid) {
      const productData = this.addProductForm.value;
      this.productService.createProduct(productData).subscribe({
        next: (response) => {
          console.log('Product added successfully:', response);
        },
        error: (error) => {
          console.error('Error adding product:', error);
        }
      });
    }
  }

  // handleGetAllCategory = () => {
  //   this.productService.getAllCategory().subscribe(
  //     (response: string[]) => {
  //       console.log('API Response:', response);
  //       if (Array.isArray(response) && response.length > 0) {
  //         this.categoryList = response.map((category, index) => ({
  //           categoryId: index + 1, // مقدار فرضی
  //           categoryName: category
  //         })) as ICategory[];
  //       } else {
  //         console.error('Unexpected API response structure:', response);
  //       }
  //     },
  //     (error) => {
  //       console.error('API Error:', error);
  //     }
  //   );
  // };

  handleGetAllProducts = () => {
    this.productService.getAllProducts().subscribe((data) => {
      console.log('Products:', data);
      this.productsList = data;
    }, error => {
      console.error('Error fetching products:', error);
    });
  };

  openSIdePanel = () => {
    this.isSidePanelVisible = true
  }
  closeSidePanel = () => {
    this.isSidePanelVisible = false
  }

  isEditMode: boolean = false
  onEdit(product: any) {

    this.addProductForm.patchValue({
      title: product.title,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      rating: product.rating,
      stock: product.stock,
      brand: product.brand,
      category: product.category,
      thumbnail: product.thumbnail,
      imageInput: product.imageInput
    });

    // تنظیم آی دی محصول برای ویرایش
    this.productObj = { ...product }; // ذخیره کردن محصول انتخاب‌شده برای استفاده در ارسال به سرور
    this.isSidePanelVisible = true; // نمایش پنل ویرایش
    this.isEditMode = true; 
    this.handleGetAllProducts()
  }


  onDelete(productId: number) {
    if (!productId) {
      console.error('Product ID is undefined!');
      return;
    }
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId).subscribe({
        next: () => {
          console.log('Product deleted successfully');
  
          // حذف محصول از لیست بدون نیاز به دریافت مجدد از API
          this.productsList = this.productsList.filter(product => product.productId !== productId);
        },
        error: (error) => {
          console.error('Error deleting product:', error);
        }
      });
    }
  }
  
}