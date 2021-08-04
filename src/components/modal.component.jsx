import "./modal.styles.scss";
import { connect } from "react-redux";
import { editItem, addItems } from "../redux/to-do-cart";
import { useState } from "react";

function Modals ({items, toggle, editItem}) {
    const [task, setTask] = useState('')
    const [resp, setResp] = useState(items.resp)
    const [id, setId] = useState(items.id)

    function saveClick () {
      const items2 = {
        task: task,
        resp: resp,
        id: id
      }
      editItem(items2);
      console.log(items2);
      setTask('')
      toggle()
    }

      return (
        <div className="modals">
          <div className="modals_content">
            <span className="close" onClick={() => toggle()}>&times;</span>
            <br></br>
            <form>
              <label>
                Task:
                <input
                  type="text"
                  name="task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </label>
            </form>
            <br></br>
            <button onClick={saveClick}>Save</button>
          </div>
        </div>
      );
    }
  
  const mapDispatchToProps = (dispatch) => ({
    addItems: (item) => dispatch(addItems(item)),
    editItem: (item) => dispatch(editItem(item))
  });
  
  const mapStateToProps = (state) => ({
    cartItems: state.cartItems
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Modals);