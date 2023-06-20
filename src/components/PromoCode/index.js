import React, { useState, useEffect } from "react";
import iconCopy from "../../assets/images/icon-copy.svg"
import app from "../../assets/images/app.svg"
import "./styles.scss"
import LeavesOne from "../LeavesOne";
import yellowLeaf from "../../assets/images/yellow-leaf.png"
import brownLeaf from "../../assets/images/brown-leaf.png"
import redLeaf from "../../assets/images/red-leaf.png"
import redLeaf2 from "../../assets/images/red-leaf2.png"
import orangeLeaf from "../../assets/images/orange-leaf.png"
import greenLeaf2 from "../../assets/images/green-leaf2.png"
import greenLeaf from "../../assets/images/green-leaf.png"
import seed from "../../assets/images/seed.png"

const PromoCode = () => {
    const[promo, setPromo] = useState(JSON.parse(localStorage.getItem('promo')))
    useEffect(() => {
        if(!promo){
            const N = 9999;
            const arr = [...Array(N).keys()].map(x => ++x);
            let rand = Math.floor(Math.random() * arr.length);
            localStorage.setItem('promo', JSON.stringify(rand));
        }
      }, []);
    
    console.log(promo)
    return(
        <div className="promoContainer">
            <div className="promoBlock">
                <div className="promoContent">
                    <p>Ваш промокод</p>
                    <div className="promocode">
                        <p>{`PROMO${promo}`}</p>
                        <img src={iconCopy}/>
                    </div>
                </div>
                <div className="appBlock">
                    <img className="imgAppPromo" src={app}/>
                    <h1>Скачать<br/> приложение</h1>
                </div>
            </div>
            <img className="staticYellowLeaf" src={yellowLeaf}/>
            <img className="staticRedLeaf" src={redLeaf}/>
            <img className="staticBrownLeaf" src={brownLeaf}/>
            <img className="staticRedLeaf2" src={redLeaf2}/>
            <img className="staticOrangeLeaf" src={orangeLeaf} />
            <img className="staticSeed" src={seed} />
            <img className="staticYellowLeaf2" src={yellowLeaf}/>
            <img className="staticBrownLeaf2" src={brownLeaf}/>
            <img className="staticGreenLeaf2" src={greenLeaf2}/>
            <img className="staticGreenLeaf" src={greenLeaf}/>
            <img className="staticRed2Leaf2" src={redLeaf2}/>
            <div style={{position: "absolute", bottom: 380, left: 300, transform: "rotate(90deg)"}}>
                <LeavesOne/> 
            </div>
            <div style={{position: "absolute", bottom: 200, left: 300, transform: "rotate(-90deg)"}}>
                <LeavesOne/> 
            </div>
            <div style={{position: "absolute", bottom: 280, left: 200}}>
                <LeavesOne/> 
            </div>
            <div style={{position: "absolute", bottom: 280, left: 350}}>
                <LeavesOne/> 
            </div>
            <div style={{position: "absolute", bottom: 200, right: 600, transform: "rotate(-90deg)"}}>
                <LeavesOne/> 
            </div>
            <div style={{position: "absolute", bottom: 400, right: 600, transform: "rotate(90deg)"}}>
                <LeavesOne/> 
            </div>
            <div style={{position: "absolute", bottom: 320, right: 450}}>
                <LeavesOne/> 
            </div>
            
        </div>
    )
}

export default PromoCode;