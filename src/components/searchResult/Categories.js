import React from 'react'

const Categories = ({categories,activeButton,trigerOnClickEmpSideBtn}) => {
   
    return (
        <>
        {
            categories.map((item)=>{
                const className = activeButton === item.name ? "active" : ""
                return(
                <div key={item.value} style={{display:"flex", flexDirection:"column"}}>
                <span onClick={trigerOnClickEmpSideBtn} value={item.value} name={item.name} key={item.name} className={` categories-text ${className}`} >{item.name}</span>
                </div> 
            )})
        }  
        </>
    )
}

export default Categories
