
import LineItem from "./LineItem"

const ItemList = ({items,handelChecked,handelDelete}) =>{
    return(
      <ul>
              {items.map((items) => (
                <LineItem
                key ={items.id}
                items={items}
                handelChecked = {handelChecked}
                handelDelete = {handelDelete}
                 />          
            ))}


          
    </ul>
    )
} 

export default ItemList