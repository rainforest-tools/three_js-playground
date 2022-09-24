import { Route, Routes } from 'react-router-dom';
import Threejs from '~/layouts/threejs';
import Home from '~/pages';
import Mountains from '~/pages/mountains';
import Spotlight from './pages/spotlight';

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='threejs' element={<Threejs />}>
        <Route path='spotlight' element={<Spotlight />} />
        <Route path='mountains' element={<Mountains />} />
      </Route>
    </Routes>
  );
};

export default App;
