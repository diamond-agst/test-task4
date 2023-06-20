import React, { useState } from "react";
import redLeaf from "../../assets/images/red-leaf.png"
import redLeaf2 from "../../assets/images/red-leaf2.png"
import greenLeaf from "../../assets/images/green-leaf.png"
import greenLeaf2 from "../../assets/images/green-leaf2.png"
import orangeLeaf from "../../assets/images/orange-leaf.png"
import yellowLeaf from "../../assets/images/yellow-leaf.png"
import brownLeaf from "../../assets/images/brown-leaf.png"
import audio from '../../assets/audio/leaves.mp3';
import { motion, AnimatePresence } from "framer-motion";
import "./styles.scss"

const LeavesOne = () => {
    const [show, setShow] = useState(true);

    const playAudio = () => {
        new Audio(audio).play();
    }

    return(
        <div className="leavesBlock">
            <AnimatePresence>
               {show &&
                    <motion.div
                        key= "a box"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 100 }}
                        exit={{ opacity: 0, x: -150 }}
                    >
                        <div onClick={() => {
                            setShow(!show)
                            playAudio()
                            }}>
                            <img className="redLeaf" src={redLeaf}/>
                            <img className="redLeaf2" src={redLeaf2}/>
                            <img className="greenLeaf" src={greenLeaf}/>
                            <img className="greenLeaf2" src={greenLeaf2}/>
                            <img className="orangeLeaf" src={orangeLeaf}/>
                            <img className="yellowLeaf" src={yellowLeaf}/>
                            <img className="brownLeaf" src={brownLeaf}/> 
                        </div>
                    </motion.div>
                } 
            </AnimatePresence>
        </div>
    )
}

export default LeavesOne;