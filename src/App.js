import {Route, Routes} from "react-router-dom";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";
import SearchForm from "./components/SearchForm/SearchForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchForm/>}/>
      <Route path={"*"} element={<NotFoundPage/>}/>
    </Routes>
  );
};

export default App;
