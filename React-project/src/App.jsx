import About from "./pages/about";
import Home from "./pages/home";
import {routes, route} from "react-router-dom";
import styled from "styled-components";
import {H1, H2} from "./style";
import styled from "styled-components";

const StyledH1 = <styled className="h1"></styled>
font-size: 32pageXOffset;


function App() {
 return (
     <>
     <h1>First React Project</h1>
     <Home name="Budi" email="budi@gmail.com" />
     <About />
     </div>
    </>
  );
}

export default App;