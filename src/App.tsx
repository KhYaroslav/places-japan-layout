import Main from './Components/Main';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
  )
}
