import React from 'react'
import Hero from '../Components/Elements/Home/Hero';
import Corevalues from '../Components/Elements/Home/Corevalues';
import OurServies from '../Components/Elements/Home/OurServies';
import Winningmanager from '../Components/Elements/Home/WinningManager';
import ManagerCards from '../Components/Elements/Home/ManagerCards';
import ChooseUS from '../Components/Elements/Home/ChooseUS';
import BestExperince from '../Components/Elements/Home/BestExperince';
// import Corevalues from '../Components/Elements/Home/Corevalues';
import Card from '../Components/Elements/Home/Card';
import Newletters from '../Components/Elements/Home/Newletters';

function Home() {
  return (
    <div>
      <Hero />
      <BestExperince />
      <OurServies />
      <Winningmanager />
      <ManagerCards />
      <ChooseUS/> 
      <Corevalues />
      <Newletters />
      <Card/>
    </div>
  )
}

export default Home
