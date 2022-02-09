import React from 'react';

function ColorBox( { color } ) {
    return (
        <>
            <div style={{border: 'solid 2px black', width: '50px', height: '50px', backgroundColor: color}}></div>
        </>
    )
  
}

export default ColorBox;