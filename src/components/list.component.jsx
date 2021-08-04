import React from "react";
import "./list.styles.scss";
import { connect } from "react-redux";
import { removeItems, toggleStatus } from "../redux/to-do-cart";
import Modals from './modal.component';
import { useState } from "react";


function ListItem ({removeItem, toggleStatus, items}) {

  const [seen, setSeen] = useState(false)

  function togglePop () {
    setSeen(previous => !previous)
   
  }

    return (
      <div className="checkout-item">
        <div className="name">
          <div className="btn" onClick={togglePop}>
            <button>&#10000;</button>
          </div>
          {seen ? (
            <Modals toggle={togglePop} items={items} />
          ) : null}
        </div>
        <span className="name">{items.task}</span>
        <span className="name">{items.resp}</span>
        <span
          className="status"
          onClick={() => toggleStatus(items)}
        >
          {items.status}
        </span>
        <div
          className="remove-button"
          onClick={() => removeItem(items)}
        >
          &#x267A;
        </div>
      </div>
    );
  }

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItems(item)),
  toggleStatus: (item) => dispatch(toggleStatus(item))
});

export default connect(null, mapDispatchToProps)(ListItem);