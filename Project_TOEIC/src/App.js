//Setting Component

import './App.css';
import Day from './component/Day';
import Daylist from './component/Daylist';
import Header from './component/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmptyPage from './component/EmptyPage';
import Createword from './component/Createword';
import Createday from './component/Createday';
// Switch --> Routes
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
        <Routes // Switch 대신 Routes, 링크에 따라서 다른 component 보여줌
        > 
          <Route path="/" element={<Daylist/>} // exact 내포로 생각하기 와일드카드 path="*"
          />
          <Route path="/day/:day" element ={<Day />} // 뒤에 붙는 :day --> 상수 바뀌면서 여러 페이지 이동 가능
          />
          <Route path='/create_word' element={<Createword/>}/>
          <Route path='/create_day' element={<Createday/>}/>
          <Route path="*" element={<EmptyPage/>} // 예외처리 와일드카드 사용
          ></Route>
        </Routes>
        {/* <img alt ="test" src = "C:\Users\choiyj\Desktop\react_pre\download.jpg"></img> */}
        {/* <img alt ="test" src = "img\download.jpg"></img> */}
      </div>
    </BrowserRouter>
    
  );
}

export default App;
