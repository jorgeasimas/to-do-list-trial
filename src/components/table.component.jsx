import React from "react";
import { connect } from "react-redux";
import "./table.styles.scss";
import ListItem from "./list.component";


const CheckOutPage = ({ cartItems }) => (
  <div className="checkout-page">
    <div className="checkout-header">
    <div className="header-block">
        <span></span>
      </div>
      <div className="header-block">
        <span>Task</span>
      </div>
      <div className="header-block">
        <span>Resp</span>
      </div>
      <div className="header-block">
        <span>Status</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItems) => (
      <ListItem items={cartItems} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cartItems
});

export default connect(mapStateToProps)(CheckOutPage);
