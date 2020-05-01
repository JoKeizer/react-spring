import React from 'react';
import {animated, useSprings} from "react-spring";

//useSprings multiple animations

// const items = [0, 1, 2, 3, 4];
//fade from 0 to 1 opacity
const items = [0.2, 0.4, 0.6, 0.8, 1];

const Boxes = () => {

    //items.map for the animation springs = array
    const springs = useSprings(
        items.length,
        items.map(item => ({
        from: {
            opacity: 0,
        },
        to: {
            opacity: item,
        }

    })))
    return(
        <div className="boxes-grid">
            {springs.map(animation => (
                    <animated.div style={animation} className="box" />
                )
            )}
        </div>
    )
}

export default Boxes;