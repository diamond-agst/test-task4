import React from "react";
import percentIcon from "../../assets/images/percentIcon.svg"
import "./styles.scss"

const MainBlock = () => {
    return(
        <div className="mainBlock">
            <div>
                <img src={percentIcon}/>
                <p>На первый заказ от 1 000 рублей<br/> в приложении «Пятёрочка Доставка»</p>
            </div>
            
        </div>
    )
}

export default MainBlock;