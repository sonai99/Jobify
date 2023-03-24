import Navbar from "./components/Navbar"
import Jobs from "./components/Jobs"
import { Route, Routes } from "react-router";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Placed from "./components/Placed";
// import Footer from "./components/Footer";
import Candidates from "./components/Candidates";
import CandidateProfile from "./components/CandidateProfile";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      {/* <Trending /> */}
      {/* <Route path="/coin" element={<Coin />} >
          <Route path=":coinId" element={<Coin />} />
        </Route> */}
        <Routes>
        <Route path="/" element={<><Hero /><Trending/> <Placed /> </> }/>
        {/* <Route path="/" element={ <Trending/> } /> */}
        <Route path="/jobs" element={<Jobs />} /> 
        <Route path="/candidates" element={<Candidates />} /> 
        <Route path="/candidateprofile" element={<CandidateProfile />} /> 
        </Routes>
    </div>
  );
}

export default App;
