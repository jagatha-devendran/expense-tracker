export class Expenses {
    icon: string;
    name: string;
    price: number;
   
    constructor(icon:string, name: string, price: number) {
      this.icon = icon;
      this.name = name;
      this.price = price;
    }

    toString(): string {
        return `Expense: ${this.name} (Price: ${this.price})`;
      }
  }

  