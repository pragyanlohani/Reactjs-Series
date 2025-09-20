
import {useState } from "react";
const Content = () =>{

         const [item,setitem] = useState([
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
        <ul>
          {items.map((items) => (
            <li className="item"></li>


          ))}
        </ul>


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