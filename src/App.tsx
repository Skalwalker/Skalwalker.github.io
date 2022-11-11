import React from 'react'
import { NavRouter } from './routes'
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
        <NavRouter/>
      </div>
    )
  }
}

export default App;
