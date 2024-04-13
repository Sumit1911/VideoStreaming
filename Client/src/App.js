import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.css";
import Video from "./pages/Video";
import Home from "./pages/Home";
import Signin from "./pages/Signin";


const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex:7;
  background-color: ${({theme})=>theme.bg};
`;
const Wrapper = styled.div`
 padding: 22px 60px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode? darkTheme: lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar/>
              <Wrapper>
                <Routes>
                  <Route path="/">
                     <Route index element={<Home type="random"/>} />
                     <Route path="trends" element={<Home type="trend"/>} />
                     <Route path="subscriptions" element={<Home type="sub"/>} />
                     <Route path="signin" element={<Signin/>}/>
                     <Route path="video">
                       <Route path=":id" element={<Video/>} />
                     </Route>
                  </Route>
                </Routes>
              </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
