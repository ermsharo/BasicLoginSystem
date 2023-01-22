
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Board from "./components/Board/Board";
import CreateUserPage from "./components/CreateUserPage/CreateUserPage";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <>
      <Helmet></Helmet>

      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Board />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route
              path="/login/create-account"
              element={<CreateUserPage />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
