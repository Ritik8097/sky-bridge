
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Layout from './Layout'
import About from "./About";
import InvestmentBanking from "./InvestmentBanking";
import PrivateEquity from "./PrivateEquity";
import LoanSyndication from "./LoanSynd";
import PurposeAndValues from "./PurposeValue";
import Leadership from "./Leadership";


function App() {
  

  return (
    <Router>
    <Routes>
      <Route  path="/" element={<Layout/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/investment-banking-solution" element={<InvestmentBanking/>}/>
      <Route  path="/private-equity" element={<PrivateEquity/>}/>
      <Route  path="/loan-syndication" element={<LoanSyndication/>}/>
      <Route  path="/purpose-value" element={<PurposeAndValues/>}/>
      <Route  path="/leadership" element={<Leadership/>}/>
      </Routes>
      </Router>
  )
}

export default App
