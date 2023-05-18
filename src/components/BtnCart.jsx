import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";

// or less ideally
function BtnCart({ selectedProduct }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClickConfirm = () => {
    alert("Bạn xác nhận thanh toán đơn hàng chứ?");
  };

  return (
    <div>
      <button style={{ float: "left" }} variant="primary" onClick={handleShow}>
        <i class="fa-solid fa-cart-shopping"></i>
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="cart">Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {selectedProduct.map((e, i) => (
            <ul key={i}>
              <li>{e.name}</li>
              <li>{e.price}</li>
              <img style={{ width: "100px" }} src={e.imageUrl}></img>
              <li>{e.heading}</li>
              <li>{e.des}</li>
              <li>
                <i class="fa-solid fa-angle-left"></i>
                {e.count}
                <i class="fa-solid fa-angle-right"></i>
              </li>
              <hr />
            </ul>
          ))}
        </Offcanvas.Body>

        <button className="btn-confirm" onClick={handleClickConfirm}>
          Xác nhận thanh toán
        </button>
      </Offcanvas>
    </div>
  );
}

export default BtnCart;
