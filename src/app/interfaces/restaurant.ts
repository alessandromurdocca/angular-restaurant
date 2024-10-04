export interface RestaurantServices {
  serviceTitle: string;
  serviceSubtitle: string;
  icon: any;
}

export interface MenuElement {
  id: number;
  category: string;
  name: string;
  topping: string[];
  price: number;
  rank: number;
}

export interface Testimonal {
  id: number;
  text: string;
  imageUrl: string;
  reviewerName: string;
  reviewerRole: string;
}

export interface Chef {
  chefImage: string;
  name: string;
  role: string;
}
