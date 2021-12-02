import React from 'react'

const Categories = (props) => {
    console.log(props);
    return (
        <>
        {
            props.categories.map((item)=>{
                const className = props.activeButton === item.name ? "active" : ""
                return(
                <div key={item.value} style={{display:"flex", flexDirection:"column"}}>
                <span onClick={props.trigerOnClickEmpSideBtn} value={item.value} name={item.name} key={item.name} className={` categories-text ${className}`} >{item.name}</span>
                </div> 
            )})
        }  
        </>
    )
}

export default Categories
