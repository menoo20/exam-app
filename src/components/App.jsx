import { Route, Routes} from "react-router-dom"
import Question from "./Question";
import Results from "./Results"
import Login from "./Login"


function App() {

  return (
  <Routes>
    <Route  path="/" exact element={<Question/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/results" element={<Results/>}/>
  </Routes>
  );
}

export default App;
