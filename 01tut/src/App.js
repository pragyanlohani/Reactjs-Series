
import './App.css';
import Header from './header';
import Content from './content';
import Footer from './fotter';
import { useState } from 'react';

function App() {

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



  return (
    
    <div className="App">
     <Header title = "Groceries list"/>
     <Content 
      items = {items}
      handelChecked ={handelChecked}
      handelDelete = {handelDelete}
     />
     <Footer 
     length = {items.lenght}
     
     />
    </div>
  );
}

export default App;
