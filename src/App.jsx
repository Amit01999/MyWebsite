import { BrowserRouter } from 'react-router-dom';
import { Contact, Hero1, Navbar, StarsCanvas, ThreeDCard } from './components';
import Marquees from './components/mycom/Marquees';
import Particles from './components/ui/particles';
import Overview1 from './components/mycom/Overview1';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=" bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero1></Hero1>
        </div>
        <div className="relative mt-0 z-0">
          <Overview1></Overview1>
          <Marquees></Marquees>
          <Particles></Particles>
        </div>
        <div>
          <Particles></Particles>
          <ThreeDCard></ThreeDCard>
          <Particles></Particles>
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
