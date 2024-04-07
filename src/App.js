import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Tools from "./Pages/Tools";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{display:'flex', flexDirection:'row'}}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route index path="/about" element={<About/>}/>
          <Route index path="/tools" element={<Tools/>}/>
          <Route index path="/work" element={<Work/>}/>
          <Route index path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
