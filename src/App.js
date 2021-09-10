import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SimpleBottomNavigation from "./components/MainNav";
import Navbar from "./components/navbar/Navbar";
import Movies from "./pages/movies/Movies";
import Search from "./pages/search/Search";
import Series from "./pages/series/Series";
import Trending from "./pages/trending/Trending";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app">
        <Container>
          <Switch>
            <Route exact path="/" component={Trending} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
