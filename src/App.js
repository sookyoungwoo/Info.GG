import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Place from "./page/Valorant/Select_map"
import Nav from "./components/Nav"
import Select from "./page/Valorant/Select_agent"
import Chat from "./page/FeedBack/Chat"
import Lecture from "./page/FeedBack/Lecture"
import English from "./page/Word/english"
import Japan from "./page/Word/japan"
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}></Route>
          <Route path="/Place" element={<Place />}></Route>
          <Route path='/Select' element={<Select />}></Route>
          <Route path='/Chat' element={<Chat />}></Route>
          <Route path='/Lecture' element={<Lecture />}></Route>
          <Route path='/english' element={<English />}></Route>
          <Route path='/japan' element={<Japan />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}