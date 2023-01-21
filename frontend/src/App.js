// import Board from "./components/board/board";
// import SingIn from "./components/singIn/singin";
// import CreateUser from "./components/createUser/CreateUser";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Board from "./components/Board/Board";

function App() {
  return (
    <>
      <Helmet></Helmet>

      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Board />}></Route>
            {/* <Route path="/login" element={<SingIn />}></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
