import {FaTrashAlt} from "react-icons/fa"
const LineItem = ({items,handelChecked,handelDelete}) =>{
    return (
 <li className="item" key ={items.id} >

                  <input type = "checkbox" 
                  onChange={() =>  handelChecked (items.id) }
                  checked={items.checked}>

                  </input>
                  <label
                  onDoubleClick={() =>  handelChecked (items.id) }
                  style={(items.checked) ? {textDecoration : "line-through"} :null }

                  >{items.item}</label>
                  <FaTrashAlt 
                  onClick={() => handelDelete(items.id)}
                  role ="button" 
                  tabIndex="0" />
                </li>
    )
}

export default LineItem