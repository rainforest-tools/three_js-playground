import { Route, Routes } from 'react-router-dom';
import Home from '~/pages';
import Threejs from '~/layouts/threejs';
import Mountains from '~/pages/mountains';

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='threejs' element={<Threejs />}>
        <Route path='mountains' element={<Mountains />} />
      </Route>
    </Routes>
  );
};

export default App;
