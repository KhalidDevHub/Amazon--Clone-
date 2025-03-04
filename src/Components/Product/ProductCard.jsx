import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from './Product.module.css'
import { Link } from "react-router-dom";
import { DateContext } from "../DateProvider/DateProvider";
import { Type } from "../../utility/action.type";


const ProductCard = ({ product, flex, renderDesc }) => {
  const { title, image, rating, price, id, description} = product;

 const[state,dispatch] =useContext(DateContext)

 const addToCart = () =>{
    dispatch({
      type: Type.ADD_TO_BASKET,
      item:{
        title,
        image,
        rating,
        price,
        id,
        description
      }
    })
 }
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* {price} */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button} onClick={addToCart}>
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
