import React, {useState} from 'react';

import {useSpring, animated, config} from 'react-spring';


const CheckoutConfigurationOptions = ({isOpen}) => {

    const { x } = useSpring({
        x: isOpen ? 0 : 100,
        // config: {
        //     // duration: 10000,
        //     //tension 176 default
        //     // tension: 400,
        //     // friction: 200,
        // }
        //defaul option from docs
        //config.slow / config.stiff / config.wobbly / config.gentle / config.default
        config: config.molasses

    });


    return (
        <div className="checkout" style={{pointerEvents: isOpen ? 'all' : 'none'}}>
            <animated.div style={{
                transform: x.interpolate( x => `translate3d(${x * -1}%, 0, 0)` )
            }} className='checkout-left'>
                <div className='left-wrapper'>
                    <h2>Left Welcome text</h2>

                </div>
            </animated.div>
            <animated.div style={{
                transform: x.interpolate( x => `translate3d(${x}%, 0, 0)`)
            }} className='checkout-right'>
                <div className='right-wrapper'>
                    <h2>Right Welcome text</h2>
                </div>
            </animated.div>
        </div>
    )
}


export default CheckoutConfigurationOptions
