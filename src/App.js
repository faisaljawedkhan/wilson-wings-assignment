import './App.css';
import AddInvestor from './Pages/JS/AddInvestor';
import Company from './Pages/JS/Company';
import InvestorSingle from './Pages/JS/InvestorSingle';
import Investors from './Pages/JS/Investors';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route exact path={"/"} element={<Investors />} />
          <Route exact path={"/company"} element={<Company />} />
          <Route exact path={"/add-investor"} element={<AddInvestor />} />
          <Route exact path={"/investor-single"} element={<InvestorSingle />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
