import React, { Component } from 'react';
import Menu from './shared/menu';
import AboutMe from './aboutMe';
import Blog from './blog';
import Homepage from './homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Div100vh from 'react-div-100vh';
import '../stylesheets/App.scss';


interface State {
  positions: {
    x: number;
    y: number;
  };
  open: boolean;
  hideEye: boolean;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      hideEye: false,
      positions: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      },
      open: false,
    };

    this.menuClick = this.menuClick.bind(this);
  }

  mouseMovement(event: any): void {
    event.persist();

    this.setState(() => {
      return {
        positions: {
          x: event.pageX,
          y: event.pageY,
        },
      };
    });
  }

  menuClick(): void {
    this.setState(prevState => {
      return {
        open: !prevState.open,
      };
    });
  }

  render(): JSX.Element {
    return (
      <Router>
        <Div100vh
          onClick={this.mouseMovement.bind(this)}
          onMouseMove={this.mouseMovement.bind(this)}
          className="app"
        >
          <Menu positions={this.state.positions} />
          <Switch>
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={AboutMe} />
            <Route path="/">
              <Homepage small={false} positions={this.state.positions} />
            </Route>
          </Switch>
        </Div100vh>
      </Router>
    );
  }
}

export default App;
