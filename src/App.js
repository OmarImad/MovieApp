import { MainContainer } from "./Global.Styles";
import Nav from "./Components/Nav/Nav";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import MovieScreen from "./Screen/MovieScreen/MovieScreen";
import { Route , Switch } from "react-router"

function App() {
  return (
    <MainContainer>
      <Nav />
      <Switch>
        <Route key={1} exact={true} path={"/"} component={HomeScreen}/>
        <Route key={2} exact={true} path={"/movie/:id"} component={MovieScreen}/>
      </Switch>
  
    </MainContainer>
  );
}

export default App;
