import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';
import { Layout } from './components';
import { GraphPage } from './pages';

const App = () => {
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
  )
}

export default App
