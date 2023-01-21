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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dict app</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link
          href="http://fonts.cdnfonts.com/css/sedgwick-ave"
          rel="stylesheet"
        />
        <link href="http://fonts.cdnfonts.com/css/helmida" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Helmet>

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
