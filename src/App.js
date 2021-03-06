import { useState } from 'react';
import CardsContainer from './components/CardsContainer';
import PriceToggle from './components/PriceToggle';
import './styles/App.css';

function App() {

  const [toggleYear, setToggleYear] = useState(true);
  const checkToggleYear = () => {
    return setToggleYear(!toggleYear)
  }


  return (
    <main className="price-plan-main">
      <div className="bg-top" />
      <div className="price-plan-container">
        <h1 className="price-plan-title">Our Pricing</h1>
        <PriceToggle toggleChange={checkToggleYear}/>
        <CardsContainer 
          toggle={toggleYear}
        />
      <div className="bg-bottom" />
      </div>
    </main>
  );
}

export default App;
