import './App.css'
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage";
import CardRepo from "./pages/cardRepo";





function App() {


  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/repos/:user/:name" element={<CardRepo/>}/>
          </Routes>
      </div>

  )
}

export default App
