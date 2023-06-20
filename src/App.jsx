import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import UserRouters from "./UserRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <UserRouters />
    </BrowserRouter>
  );
};

export default App;
