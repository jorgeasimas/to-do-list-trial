import React from "react";
import "./input.styles.scss";
import { connect } from "react-redux";
import { addItems } from '../redux/to-do-cart';
import { useState } from "react";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import { Button } from "react-bootstrap";

function Input ({addItem}) {

    const [task, setTask] = useState('')
    const [resp, setResp] = useState('')
    const [id, setId] = useState(0)
    
function handleClick() {
    const items1 = {
      task: task,
      resp: resp,
      id: id
    };
    if ((items1.task !== "") & (items1.resp !== "")) {
      addItem(items1)
      setTask('')
      setResp('')
      setId((previous) => previous +1)

      console.log(id);
    } else {
      alert("please fill out both fields");
    }
  }

    return (
      <div className="sign-in">
        <form>
          <div className="group">
            <input
              className="form-input"
              name="task"
              type="task"
              onChange={(e) => setTask(e.target.value)}
              value={task}
              label="task"
              required
            />
            <label className="form-input-label">task</label>
          </div>

          <div className="group">
            <input
              className="form-input"
              name="resp"
              type="resp"
              onChange={(e) => setResp(e.target.value)}
              value={resp}
              label="resp"
              required
            />
            <label className="form-input-label">resp</label>
          </div>
        </form>
        <div className="buttons">
          <Button variant="success" onClick={handleClick}>ADD to-do List</Button>
        </div>
      </div>
    );
  }

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItems(item))
});

export default connect(null, mapDispatchToProps)(Input);
