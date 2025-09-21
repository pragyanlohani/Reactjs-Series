const Header = ({title}) =>{

    // const HeaderStyle = {
    //          backgroundColor:"#000",
    //     color:"white"
    // }

return (

     <header> 
     
     <h1>{title}</h1>

    </header>
)

}

Header.defaultProps = {
    title:"Default Title"
}



export default Header ;