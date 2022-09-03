import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";



//const [dummy, setdummy]=useState()
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 4,
    name: "HP Pavillion",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 5,
    name: "Acer Aspire",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
];

const DUMMY_PRODUCTS2 = [
  {
    id: 1,
    name: "Samsung 50 BU8100",
    imgURL:
      "https://images.samsung.com/is/image/samsung/p6pim/levant/ua50bu8100uxtw/gallery/levant-uhd-4k-tv-ua50bu8100uxtw-r-perspective-black-532991338?$720_576_PNG$",
    price: 25,
  },
  {
    id: 2,
    name: "Samsung 65” Class QN90B",
    imgURL:
      "https://image-us.samsung.com/SamsungUS/home/easy-asset/02252022/01_QN65QN90BAFXZA_011_Front3_Titan-Black.jpg?$product-details-jpg$",
    price: 25,
  },
  {
    id: 3,
    name: "LG 50″,LED,UHD 4K,Smart TV",
    imgURL:
      "https://leaders.jo/wp-content/uploads/2022/07/Screenshot-2021-02-25-133922.jpg",
    price: 25,
  },
  {
    id: 4,
    name: "LG UHD 70 Series",
    imgURL:
      "https://www.lg.com/us/images/tvs/md07511603/gallery/desktop-06.jpg",
    price: 25,
  },
  {
    id: 5,
    name: "G Guard 50 LED Smart TV",
    imgURL:
      "https://newtonstores.com/web/image/product.template/12114/image",
    price: 25,
  },
];

const all = [...DUMMY_PRODUCTS,...DUMMY_PRODUCTS2]

const Products = () => {

  const choosecatrgore= useSelector(state=>state.Categorie.Categorie)
  
console.log(all);
  return (
    <div>
      <ul className="products-container">
        {(choosecatrgore=="laptop"?DUMMY_PRODUCTS:choosecatrgore=="tv"?DUMMY_PRODUCTS2:all  ).map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
