import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Menu from './Components/Menu';
import Video from './pages/Video';
import Navbar from './Components/Navbar';
import SignIn from './pages/Sigin';
import { darkTheme, lightTheme } from './utils/Theme';

const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bgLighter};
  position: sticky;
  top: 0;
`

const Wrapper = styled.div`

`

function App() {

  const [ darkMode, setDarkMode ] = useState(false)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
      <Container>
        <BrowserRouter>
          <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
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
