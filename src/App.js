import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useSpring, animated} from 'react-spring';

// import Toggle from './components/Toggle'
// import ToggleTransistion from './components/ToggleTransistion'
// import ToggleTwoItems from './components/ToggleTwoItems'
// import ToggleTransistionTwo from './components/ToggleTransistionTwo'
import Nav from './components/Nav'
// import Checkout from './components/Checkout'
import CheckoutConfigurationOptions from './components/CheckoutConfigurationOptions'
// import Routes from './Routes'
import Modal from './components/Modal'
import Accordion from './components/Accordion'
import WayPoints from './components/WayPoints'
// import Gesture from './components/Gesture'
// import GestureEvents from './components/GestureEvents'
// import Boxes from './components/Boxes'
import DraggableList from './components/DraggableList'

const App = () => {

  const [isNavOpen, setNavOpen] = useState(false);
  const [isChartOpen, setChartOpen] = useState(false);

  const navAnimation = useSpring({
    transform: isNavOpen 
    ? `translate3d(0, 0, 0) scale(1)` 
    : `translate3d(100%, 0, 0) scale(0.6)`
  })

  const fade = useSpring({ 
    from: { 
      opacity: 0,
    },
    opacity: 1,
  })


  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        {/*<img src={logo} className="logo" />*/}
        {/*<button onClick={() => setChartOpen(!isChartOpen)}className="menu-button">Chart</button>*/}
        {/*<button onClick={() => setNavOpen(!isNavOpen)}className="menu-button">Menu</button>*/}
        {/*<Nav style={navAnimation}/>*/}
      </header>
      <main>
        {/*<Toggle/>*/}
        {/*<ToggleTransistion/>*/}
        {/*<ToggleTwoItems/>*/}
        {/*<ToggleTransistionTwo/>*/}
        {/*<Routes/>*/}
        {/*<Modal/>*/}
        {/*<Accordion/>*/}
        {/*<WayPoints/>*/}
        {/*<Gesture/>*/}
        {/*<GestureEvents/>*/}
        {/*<Boxes/>*/}
        <DraggableList items={'Lorem ipsum dolor sit'.split(' ')}/>


        {/*<Checkout isOpen={isChartOpen}/>*/}
        <CheckoutConfigurationOptions isOpen={isChartOpen}/>
      </main>
    </animated.div>
  );
}

export default App;
