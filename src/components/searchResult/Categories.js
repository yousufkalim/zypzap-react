import React from 'react'

const Categories = ({categories,activeButton,trigerOnClickEmpSideBtn}) => {
   
    return (
        <>
        {
            categories.map((item)=>{
                const className = activeButton === item.name ? "active" : ""
                return(
                <div onClick={trigerOnClickEmpSideBtn}  key={item.value} className={`categories-text ${className}`} sx={{display: 'flex', flexDirection:"column",}}>
                <span value={item.value} name={item.name} key={item.name}  >{item.name}</span>
                </div> 
            )})
        }  
        </>
    )
}

export default Categories
