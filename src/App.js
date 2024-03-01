import {Route, Routes} from "react-router-dom";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";
import SearchPage from "./containers/SearchPage/SearchPage";
import MainPage from "./containers/MainPage/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/search-city" element={<SearchPage/>}/>
      <Route path={"*"} element={<NotFoundPage/>}/>
    </Routes>
  );
};

export default App;
