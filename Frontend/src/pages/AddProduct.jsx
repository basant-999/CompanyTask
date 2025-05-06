import React, { useState } from 'react'
import item from './Data.jsx'
import "../Css/addproduct.css"
const AddProduct = () => {
    const [input,setinput] = useState({})

    const handleinput =(e)=>{
        let name = e.target.name
        let value = e.target.value

        setinput(values=>({...values,[name]:value}))
        console.log(input)
    }

    const finalsubmit=(e)=>{
        e.preventDefault()
        console.log(input.pname);
        const IsExsisting = item.list.some(
            key => key.pname.toLowerCase() === input.pname.toLowerCase()
          );
      
        console.log(IsExsisting,"f");
        if(IsExsisting){
            alert("Alerdy added")
        }
        else{
            item.list.push(input);
            alert("product added");
            console.log(item);
        }
        
    }
  return (
   <>
    <div id='ProductMainDiv'>
      <div className="SecondMainDiv">
            <h2>Add Product Form</h2>
        
            <form id="ProductForm" onSubmit={finalsubmit}>
                <label htmlFor="username">Product name</label>
                <input type="text" id="username" required name='pname' onChange={handleinput}/>
                <label htmlFor="password">Price</label>
                <input type="text" id="password" required name='price' onChange={handleinput}/>
                <button type="submit" >Add</button>
            </form>
      </div>
    </div> 
   </>
  )
}

export default AddProduct