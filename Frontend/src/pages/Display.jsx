import React, { useState } from 'react'
import item from './Data.jsx'
import "../Css/Display.css"
import { ImCross } from "react-icons/im";
const Display = () => {
    console.log(item);
    const [items ,setItems] = useState(item.list)
    const handleDelete =(p)=>{
        const updateitem = item.list.filter(key=>key.pname != p);
        setItems(updateitem);
        item.list = updateitem;
    }
  return (
    <>
    <div id='DisplayMainDiv'>
        <h3 >Display Product</h3>
        

        
        {items.length === 0 ? (
        <div>No Product Found</div>
            ) : (
                <table style={{border:"1px solid black",margin:"auto"}}>
                <thead>
                    <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody >
                    {items.map((key) => (
                    <tr >
                        <td>{key.pname}</td>
                        <td>{key.price}</td>
                        <td><ImCross style={{cursor:'pointer'}} onClick={()=>handleDelete(key.pname)}/></td>
                    </tr>
                    ))}
                </tbody>
                </table>
            )}
             
             </div>
    </>
  )
}

export default Display