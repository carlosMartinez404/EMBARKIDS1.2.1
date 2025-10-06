import React, {useState} from "react";

function InputText({style={}, placeholder, onChange}){

    const [active, setActive] = useState("");
    const [content, setContent] = useState("");

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
        }
    }


    return(
        <div style={{...styles.container, ...style}}>
            <h2 style={styles.text}>{placeholder}</h2>
            <input 
                required
                type="text" 
                style={{...styles.input}} 
                onFocus={handleActivate} 
                onBlur={handleActivate} 
                onChange= {(e) => {setContent(e.target.value), onChange(e.target.value)}}
                value={content}
            />
        </div>
    )
}

export default InputText;