export interface ILogin {
    username: string,
    password: string,
}

export interface IProduct {
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    imageInput: string;
  }

  export interface IProducts {
    id: number;
    productId: number; 
    productSku: string; 
    productName: string; 
    productPrice: number; 
    productShortName: string;
    productDescription: string; 
    createdDate: Date; 
    deliveryTimeSpan: string; 
    categoryId?: number;
    productImageUrl: string; 
    categoryName: string; 
    availabilityStatus: string; 
    brand: string; 
    discountPercentage: number; 
    rating: number; 
    stock: number; 
    warrantyInformation: string; 
    returnPolicy: string; 
    title: string; 
    weight: number; 
    dimensions: {
        width: number;
        height: number;
        depth: number;
    }; 
    reviews: {
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
        reviewerEmail: string;
    }[];
    tags: string[];
    images: string[]; 
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    }; 
    minimumOrderQuantity: number; 
    shippingInformation: string; 
}

export interface ICategory {
    categoryId?: number;
    categoryName: string;
}
  