import React from 'react'

export default function Button(){
    const onClickButtonOK =() =>{
        alert('OK')
    }
    const onClickButtonCancel =() =>{
        alert('Cancel')
    }

    let banner = './images/th-11134207-23020-fthpyw3zw4mv9c.jpg'
    let url = 'https://www.netflix.com/th/login'
    const bannerClick =() =>{
        window.open(url)
    }
    return(
        <div>
            <img src={banner} onClick={bannerClick} style={{cursor:'pointer',width:'20%'}}/>
            <button onClick={onClickButtonOK}>OK</button>
            <button onClick={onClickButtonCancel}>Cancel</button> 
        </div>
    )
}