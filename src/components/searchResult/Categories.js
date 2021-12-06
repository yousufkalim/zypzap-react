import React from 'react'

const Categories = ({ categories, activeButton, trigerOnClickEmpSideBtn }) => {

    return (
        <>
            {
                categories.map((item) => {
                    const className = activeButton === item.name ? "active" : ""
                    return (
                        <div onClick={trigerOnClickEmpSideBtn} key={item.name} className={`categories-text ${className}`} sx={{ display: 'flex', flexDirection: "column", }}>
                            <span >{item.name}</span>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Categories
