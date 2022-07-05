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
      <h1 className="price-plan-title">Our Pricing</h1>
      <PriceToggle toggleChange={checkToggleYear}/>
      <CardsContainer 
        toggle={toggleYear}
      />
    </main>
  );
}

export default App;
