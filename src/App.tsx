import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { routes } from './routes'


function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
