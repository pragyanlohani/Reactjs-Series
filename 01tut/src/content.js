
import {useState } from "react";
import {FaTrashAlt} from "react-icons/fa"
const Content = () =>{

         const [items,setitem] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const handelChecked = (id) =>{
         const listItem = items.map((items) => items.id === id?{...items, checked:! items.checked} : items);
         setitem(listItem);
         localStorage.setItem("shoping list",JSON.stringify(listItem));
    
        };

        const handelDelete = (id) =>{
         const listItem = items.filter((items) => items.id !== id)
         setitem(listItem);
         localStorage.setItem("shoping list",JSON.stringify(listItem));
        };




    // const [name, setName] =  useState("pragyan");

    // const [count,setCount] = useState(0);

  //     const handelNameChange = () => {
  //   const names = ["amit" ,"dave " ,"ankit"];
  //   const int = Math.floor(Math.random()*3);
  //    setName(names[int]);

  // }


  // const handelClick = () =>{
  //   setCount (count+1);
  //   console.log(count);
  // };

  // const handelClickTwo = (name) =>{
  //   console.log(`${name}`)
  // };
  // const handelClickThree = (e) =>{
  //   console.log(e)
  // };

return (

    <main>
      {items.length ? (
            <ul>
              {items.map((items) => (
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
              
     
          ))}

        
          
        </ul>
     ) :(
          <p style={{margin:"2rem"} }> your list is empty</p>
        )}

      {/* <p>
        hello {name}!
      </p>
      <button onClick={handelNameChange}>change name</button>
      <button onClick= {handelClick }>Count</button>
      <button onClick= {(e) =>handelClickThree(e)}>Click</button> */}

    </main>

    
)

};


export default Content