import { lazy, Suspense, useEffect } from "react";
import { StyledThemeProvider } from "definitions/styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./i18n";
import { useAppDispatch, useAppSelector } from "redux/store";
import { userInfo } from "redux/slice/userSlice";
import { useSelector } from "react-redux";

const Home = lazy(() => import("./pages"));
const Coins = lazy(() => import("./pages/Coins"));
const Features = lazy(() => import("./pages/Features"));

function App(): JSX.Element {
  const { loading, error, data } = useAppSelector((state) => state.users);
  let dispatch = useAppDispatch();
  console.log(data, "data");
  useEffect(() => {
    dispatch(userInfo());
  }, []);

  return (
    <StyledThemeProvider>
      <div className="App">
        <Suspense fallback={<p>Loading</p>}>
          <Router>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/coins"} element={<Coins />} />
              <Route path={"/features"} element={<Features />} />
            </Routes>
          </Router>
        </Suspense>
      </div>
    </StyledThemeProvider>
  );
}

export default App;
