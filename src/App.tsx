import 'reactflow/dist/style.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ReactFlowProvider}            from 'reactflow';

import {Layout}                       from './components';
import {GraphPage}                    from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ReactFlowProvider
          ><GraphPage />
          </ReactFlowProvider>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
