import { useState } from "react";

const TextStyler = ( {text} ) => {

    //setting states and default values for styles
    const [textStyle, setTextStyle] = useState({
        isBold: false,
        isUnderline: false,
        isItalic: false,
        fontSize: 16,
        color: 'black',
    });
    
    //handling buttons double click, changing style opposite to the previous style
    const toggleStyle = (style) => {
        setTextStyle((prevState) => ({
            ...prevState,
            [style]: !prevState[style],
        }));
    };
    
    const handleFontSizeChange = (event) => {
        setTextStyle((prevState) => ({
            ...prevState,
            fontSize: parseInt(event.target.value, 10),
        }));
    };
    
    const handleColorChange = (event) => {
        setTextStyle((prevState) => ({
            ...prevState,
            color: event.target.value,
        }));
    };
    
    const { isBold, isUnderline, isItalic, fontSize, color } = textStyle;
    
    const textStyles = {
        fontWeight: isBold ? 'bold' : 'normal',
        textDecoration: isUnderline ? 'underline' : 'none',
        fontStyle: isItalic ? 'italic' : 'normal',
        fontSize: `${fontSize}px`,
        color,
    };
    
    return( 
        <>
            <div className="btnsContainer">
                <button onClick={() => toggleStyle('isBold')}>Bold</button>
                <button onClick={() => toggleStyle('isItalic')}>Italics</button>
                <button onClick={() => toggleStyle('isUnderline')}>Underline</button>
                <input
                    type="number"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                    placeholder="Enter font size"
                />
                <input
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                />
            </div>
            <div className="textContainer">
                <p style={textStyles}> {text} </p>
            </div>
        </>
    )
}
export default TextStyler;