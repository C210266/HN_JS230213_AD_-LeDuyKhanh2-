import React, { useState } from "react";
import Item from "./Item";
import BtnCart from "./BtnCart";


function ParentList() {
  const [data, setData] = useState([
    {
      name: "Airpods Pro",
      price: 24900,
      actionNamePro: "",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU",
      qty: 10,
      heading: "Wireless Noise Cancelling Earphones",
      des: "AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy mode so much can hear your surroundings.",
      count: "1",
    },
    {
      name: "Apple Watch",
      price: 40900,
      actionNamePro: "",
      imageUrl: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
      qty: 15,
      count: "1",
      heading: "You’ve never seen a watch like this",
      des: "The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling, fall detection and a built‑in compass.",
    },
    {
      name: "Macbook Pro",
      price: 199900,
      actionNamePro: "",
      imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
      qty: 20,
      count: "1",
      heading: "The best for the brightest",
      des: "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. it’s the ultimate pro notebook for the ultimate user.",
    },
    {
      name: "iPhone 11 pro",
      price: 106600,
      count: "1",
      actionNamePro: "",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
      qty: 35,
      heading: "Pro cameras. Pro display. Pro performance",
      des: "A mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
    },
    {
      name: "iPad Pro",
      price: 71900,
      actionNamePro: "",
      count: "1",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
      qty: 25,
      heading: "Your next computer is not a computer",
      des: "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro.",
    },
  ]);
  const [count, setCount] = useState(1);
  const [actionName, setActionName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState([]);
 
  const [currentProduct, setCurrentProduct] = useState({
    name: "",
    price: "",
    actionNamePro: "",
    count: 1,
    imageUrl: "",
    qty: 0,
    heading: "",
    des: "",
  });
  const handleAdd = (action, selectedPro) => {
    setActionName(action);
    setSelectedProduct([...selectedProduct, selectedPro]);
    setCurrentProduct({ selectedPro });
    setCount(1);
  
  };

  const handleCount = (value) => {
    setCount(value);
    setSelectedProduct((items) =>
      items.map((item) => {
        if (item.name === currentProduct.selectedPro.name) {
          return { ...item, count: value };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <BtnCart selectedProduct={selectedProduct} />

      <div class="container">
        {data.map((e, i) => (
          <Item
            key={i}
            count={count}
            actionName={actionName}
            productInfo={e}
            handleAdd={handleAdd}
            handleCount={handleCount}
           
          />
        ))}
      </div>
    </div>
  );
}

export default ParentList;
