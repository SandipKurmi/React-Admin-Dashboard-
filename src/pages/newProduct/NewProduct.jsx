import React from "react";
import "./newProduct.css";
import { Image } from "@material-ui/icons";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form action="" className="addProductForm">
        <div className="addProductItem">
          <label>Select Image</label>
          <label for="img">
            <Image />
          </label>
          <input type="file" name="img" id="img" style={{ display: "none" }} />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="test" name="" id="" placeholder="Apple AirPods" />
        </div>
        <div className="addProductItem">
          <label>stock</label>
          <input type="text" name="" id="" placeholder="123" />
        </div>
        <div className="addProductItem">
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
