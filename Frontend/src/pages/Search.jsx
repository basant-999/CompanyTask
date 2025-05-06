import React, {  useState } from 'react'
import item from './Data.jsx'
import "../Css/search.css"
function Search() {
    const [input , setInput] = useState({});
    const handleinput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setInput(key=>({...key,[name]:value}));
        console.log(input);
    }
    
    let [data,setData] = useState([])
    let[dis ,setDis] = useState("none");
    const handleSubmit=()=>{
        let fData
        console.log(input);
        if (!input.type || input.type === "pname") {
            fData = item.list.filter((key) =>
              key.pname.toLowerCase().includes(input.search.toLowerCase())
            );
            setData(fData);
          } else if (input.type === "price") {
            fData = item.list.filter((key) =>
              key.price.toString().includes(input.search)
            );
            setData(fData);
          }
          
            setDis("block");
          
        
      console.log(data)
      
        
    }
  return (
    <>
        <div id='SearchMainDiv'>
            <div id='searchSecondDiv'>
                <div>
                    <label htmlFor="searchInput">Search Product :</label>
                    <input type="text" id='searchInput' name="search" onChange={handleinput}/>
                </div>
                <div>
                    <label htmlFor="search" >Filter Search : </label>
                    <select id="search" name="type" value={input.type} onChange={handleinput}>
                        <option >options</option>
                        <option value="pname">Name</option>
                        <option value="price">Price</option>
                    </select>
                </div>
                
                <button onClick={handleSubmit}>Search</button>
            </div>
        </div>

        <div id='SearchShowMainDiv' style={{display:dis}}>

       
            {data.length === 0 ? (
                    <div style={{display:dis}}>No Product Found</div>
                        ) : (
                <table style={{border:"1px solid black",margin:"auto"}}>
                <thead>
                    <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    
                    </tr>
                </thead>
                <tbody >
                    {data.map((key) => (
                    <tr >
                        <td>{key.pname}</td>
                        <td>{key.price}</td>
                        
                    </tr>
                    ))}
                </tbody>
                </table>
            )}
         </div>
    </>
  )
}

export default Search