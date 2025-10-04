import React, {useState} from "react";

function InputText({style={}, placeholder}){

    const [active, setActive] = useState("")

    const handleActivate = () =>{ 
        
        if(active === ""){
            setActive("Active")
        } else if (active === "Active"){
            setActive("inActive")
        } else {
            setActive("Active")
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
            border: "1px solid"
        },
        text: {
            width: "100%",
            fontSize: "17px",
            fontWeight: 400,
            position: "relative",
            transform: active === "" ? 'translate(0px, 30px)' : active === "Active" ? 'translate(0px, -3px)' : active === "inActive" ? 'translate(0px, 30px)' : '',
            pointerEvents: "none",
            transition: 'transform 0.3s ease'
        }
    }


    return(
        <div style={{...styles.container, ...style}}>
            <h2 style={styles.text}>{placeholder}</h2>
            <input type="text" style={{...styles.input}} onFocus={handleActivate} onBlur={handleActivate} />
        </div>
    )
}

export default InputText;