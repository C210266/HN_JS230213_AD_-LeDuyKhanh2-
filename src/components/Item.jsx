import React, { useEffect } from "react";

function Item({ count, handleCount, actionName, productInfo, handleAdd }) {
  const handleClickAdd = (productInfo) => {
    productInfo.actionPro = "ADDPro";
    handleAdd("ADDPro", productInfo);
  };

  const handleMinus = () => {
    if (count > 1) handleCount(count - 1);
  };
  const handlePlus = () => {
    handleCount(count + 1);
  };

  let elementBtn =
    actionName !== productInfo.actionPro ? (
      <button
        className="btn btn-add"
        onClick={() => handleClickAdd(productInfo)}
      >
        Add
      </button>
    ) : (
      <div>
        <i className="fa-solid fa-angle-left" onClick={handleMinus}></i>
        {count}
        <i className="fa-solid fa-angle-right" onClick={handlePlus}></i>
      </div>
    );

  return (
    <div class="item">
      <div class="item-header">
        <i class="fa-brands fa-apple" />
        <span>No track</span>
      </div>

      <div class="tiles">
        <a class="tile" href="#">
          <img src={productInfo.imageUrl} />

          <div class="details">
            <span class="title">{productInfo.name}</span>
            <span class="info">{productInfo.des}</span>

            <div className="price-btn">
              <span className="price">{productInfo.price}</span>
              {elementBtn}
            </div>
          </div>
        </a>
      </div>
      <span class="main-title">{productInfo.name}</span>
    </div>
  );
}

export default Item;
