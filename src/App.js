
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Services from './Components/Services/Services';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App(props) {


  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
            <Routes>
              <Route path="/main" element={<Main/>} />
              <Route path='/services' element={<Services state={props.state} dispatch = {props.dispatch}/>}/>
            </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
