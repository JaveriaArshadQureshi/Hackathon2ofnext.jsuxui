interface Dimensions { height: number; 
    width: number; depth: number; } 
  

// export interface Product{
//   _id: string; 
//   name: string; 
//   categoryName: string; 
//   slug: string; 
//   imageUrl? : {
//     asset:{
//       _ref:string;
//       _type:"image";
//     }
//   };
//   price: number; 
//   quantity: number; 
//   tags: string[]; 
//   description? : string; 
//   features: string[]; 
//   dimensions: Dimensions;
// }

export interface Product{
  _id: string; 
  name: string; 
  _type:"product";
  categoryName: string; 
  slug: {
   _type :"slug";
   current : string;
  };
  price:number;
  image? : {
    asset:{
      _ref:string;
      _type:"image";
    }
  };
  quantity: number; 
  tags: string[]; 
  description? : string; 
  features: string[]; 
  dimensions: string[];
}