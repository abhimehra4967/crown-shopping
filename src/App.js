
import './App.css';
import Homepage from "./components/homepage/homepage.component";
import {Switch,Link, Route, Router, withRouter} from "react-router-dom";



const SecondPage=()=>(
<div>
  hello
</div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}/> 
        <Route exact path="/shop/hats" component={SecondPage}/>
        
      </Switch>
    </div>
    
  );
}

export default App;
