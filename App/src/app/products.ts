export class product {
    id: number;
    name: string;
    imagePath: string;
    rating: number;
    price : number;
    category : string;
   
    constructor(name: string, imagePath: string, rating: number,price:number,category:string ) {
        this.name = name;
        this.imagePath = imagePath;
        this.rating = rating;     
        this.price = price;
        this.category = category;
    }
    
}