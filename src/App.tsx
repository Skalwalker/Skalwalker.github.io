import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";
import { routes } from './routes'
import Splashscreen from './views/Splashscreen'
import './assets/css/splashscreen.css';

type MyProps = {}
type MyState = {loading: boolean}


class App extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = {
        loading: true,
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    setTimeout(() => {
      this.setState({loading: false});
    }, 4000);
  };

  render() {
    return (
      <div>
        {this.state.loading && (
          <div className="loader-container">
            <Splashscreen/>
          </div>
        )}
        <Router>
          <div>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main/>}
                />
              ))}
            </Switch>
          </div>
          <Route exact path="/">
              <Redirect to="/about/core" />
          </Route>
          <Route exact path="/about">
              <Redirect to="/about/core" />
          </Route>
        </Router>
      </div>
    )
  }
}

export default App;
