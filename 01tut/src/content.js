
import { use, useState } from "react";
const Content = () =>{

    const [name, setName] =  useState("pragyan");

    const [count,setCount] = useState(0);

      const handelNameChange = () => {
    const names = ["amit" ,"dave " ,"ankit"];
    const int = Math.floor(Math.random()*3);
     setName(names[int]);

  }


  const handelClick = () =>{
    setCount (count+1);
    console.log(count);
  };

  const handelClickTwo = (name) =>{
    console.log(`${name}`)
  };
  const handelClickThree = (e) =>{
    console.log(e)
  };

return (

    <main>
      
      <p>
        hello {name}!
      </p>
      <button onClick={handelNameChange}>change name</button>
      <button onClick= {handelClick }>Count</button>
      <button onClick= {(e) =>handelClickThree(e)}>Click</button>

    </main>
)

};


export default Content