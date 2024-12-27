import { BrowserRouter } from 'react-router-dom';
import {
  Contact,
  Hero1,
  Navbar,
  StarsCanvas,
  Overview,
  ThreeDCard,
} from './components';
import Marquees from './components/mycom/Marquees';
import Particles from './components/ui/particles';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=" bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero1></Hero1>
        </div>
        <div className="relative z-0">
          <Overview></Overview>
          <Marquees></Marquees>
          <Particles></Particles>
          <StarsCanvas />
        </div>
        <ThreeDCard></ThreeDCard>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
