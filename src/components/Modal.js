import React,{useState} from 'react';
import {useTransition, animated} from 'react-spring'


const Modal = ({closeModal, animation, pointerEvents}) => {
    return(
        <div className="modal" style={{pointerEvents}}>
            <animated.div style={animation} className="modal-card">
                <h1>Modal</h1>
                <button onClick={closeModal}>Close</button>

            </animated.div>
        </div>
    )
}

const ModalWrapper = () => {
    const [on, toggle] = useState(false);
    const transition = useTransition(on, null, {
        from: {opacity: 0, transform: 'translate3d(0, -40px, 0)'},
        enter: {opacity: 1, transform: 'translate3d(0, 0px, 0)'},
        leave: {opacity: 0, transform: 'translate3d(0, -40px, 0)'}
    })

    const pointerEvents = on ? 'all' : 'none';

    return(
        <div>
            {transition.map(
                ({item, key, props: animation}) =>
                //not on but item
                item && <Modal
                        animation={animation}
                        pointerEvents={pointerEvents}
                        closeModal={() => toggle(false)}/>
            )}
            <button onClick={ () => toggle(!on) }>Open</button>
        </div>
    )
}

export default ModalWrapper;