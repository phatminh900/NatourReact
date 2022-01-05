import React from "react";
import { useSelector } from "react-redux";
import Product from "../Product/Product";

// const products = [
//   {
//     id: "p1",
//     title: "BackPack",
//     description:
//       "The foremost item a traveller needs to have is a compact and multi-utility backpack with multiple hidden pockets so that you can always carry all your packed travel stuff wherever you go without much worry of anything getting stolen",
//     features: [
//       "WATER BOTTLE POCKET",
//       "STERNUM STRAP",
//       "PADDED SHOULDER STRAPS",
//       "ORGANIZER POCKETS",
//     ],
//     price: 49,
//   },
//   {
//     id: "p2",
//     title: "HeadLamp",
//     description:
//       "A Headlamp or a Flashlight or for that matter a torch is a MUST-HAVE and very important essential for trekking, camping, and hiking - you never know about at what time you will reach your destination, so yeah a light resource is a must to keep with you as an essential.",
//     features: [
//       "Higher lumens (600+)",
//       "Rechargeable lights",
//       "Lightweight design",
//       "Red light mode",
//     ],
//     price: 39,
//   },
//   {
//     id: "p3",
//     title: "First Aid Kit",
//     description: `'If you\'re going for adventure sports activities like hiking, trekking or camping then you've got to have a first aid kit. The routes can be very rough and it\'s not surprising to get several cuts and bruises during the trek.`,
//     features: [
//       "Wide range of applications",
//       "Easy to use",
//       "PADDED SHOULDER STRAPS",
//       "ORGANIZER POCKETS",
//     ],
//     price: 75,
//   },
//   {
//     id: "p4",
//     title: "Camping",
//     description: `A basic Swiss Army Pocket Knife comes with a set of a knife, can opener, corkscrew, scissors, screwdriver, bottle opener and nail filer.`,
//     features: [
//       "Wide range of applications",
//       "Easy to use",
//       "PADDED SHOULDER STRAPS",
//       "ORGANIZER POCKETS",
//     ],
//     price: 150,
//   },
// ];

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const toursItem = products.map((product) => (
    <Product
      key={product.id}
      description={product.description}
      id={product.id}
      title={product.title}
      price={product.price}
      features={product.features}
    />
  ));
  // const send=async()=>{
  //     const response=await fetch(`https://tours-5d066-default-rtdb.asia-southeast1.firebasedatabase.app/products.json`,{
  //         method:"POST",
  //         headers:{
  //             'Content-Type':'application/json'
  //         },
  //         body:JSON.stringify(products)
  //     })
  //     const data=await response.json()
  //     console.log(data);
  // }

  return <ul className="grid-3-columns">{toursItem}</ul>;
};

export default Products;
