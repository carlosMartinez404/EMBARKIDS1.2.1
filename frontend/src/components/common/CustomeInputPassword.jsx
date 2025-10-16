import React, {useState} from "react";
import OpenEye from '../../assets/openEye.svg?react';
import ClosedEye from '../../assets/closedEye.svg?react';

function InputText({style={}, placeholder, onChange}){

    const [active, setActive] = useState("");
    const [content, setContent] = useState("");

    const [eye, setEye] = useState("")
    const [type, setType] = useState("password")

    const handleActivate = () =>{ 
        
        if(active === ""){
            setActive("Active")
        } else if (active === "Active"){
            if(content===""){
                setActive("inActive")
            } else {
                setActive("Active")
            }
        } else {
            setActive("Active")
        }
        
    }

    const handleEye =()=>{
        if(eye === ""){
            setEye("Closed")
            setType("text")
        } else {
            setEye("")
            setType("password")
        }
    }

    const styles = {
        container: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
        },
        input: { 
            padding: "10px 10px",
            width: "100%",
            borderRadius: "10px",
            border: "1px solid",
            fontSize: "17px"
        },
        text: {
            width: "100%",
            fontSize: "17px",
            color: active === "" ? 'black' : active === "Active" ? '#1053ff' : active === "inActive" ? '#000' : '',
            fontWeight: 400,
            position: "relative",
            transform: active === "" ? 'translate(0px, 32px)' : active === "Active" ? 'translate(0px, -3px)' : active === "inActive" ? 'translate(0px, 32px)' : '',
            pointerEvents: "none",
            transition: 'all 0.3s ease'
        },
        icon: {
            fill: "blue",
            cursor: "pointer",
            transform: 'translate(185px, -33px)'
        }
    }


    return(
        <div style={{...styles.container, ...style}}>
            <h2 style={styles.text}>{placeholder}</h2>
            <input 
                required
                type={type}
                style={{...styles.input}} 
                onFocus={handleActivate} 
                onBlur={handleActivate} 
                onChange= {(e) => {setContent(e.target.value), onChange(e.target.value)}}
                value={content}
            />

            {eye === ""? <OpenEye  width="24" height="24" style={styles.icon} onClick={handleEye}/> : <ClosedEye  width="24" height="24" style={styles.icon} onClick={handleEye}/> }
        </div>
    )
}

export default InputText;