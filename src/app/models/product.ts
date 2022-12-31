export class Product {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
  amount: number;
  constructor() {
    this.id = -1;
    this.name = 'product placeholder';
    this.amount = 1;
    this.price = -1;
    this.url =
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    this.description = 'placeholder description';
  }
}
