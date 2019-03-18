import React, { Component } from 'react';
import Menu from './menu';
import Eye from './eye';
import Card from './card';
import '../stylesheets/App.scss';

interface iState {
  xPosition: number;
  yPosition: number;
  open: boolean;
}

interface iProps { }

class App extends Component<iProps, iState> {
  constructor(props: iProps) {
    super(props)

    this.state = {
      xPosition: window.innerWidth / 2,
      yPosition: window.innerHeight / 2,
      open: false
    }

    this.menuClick = this.menuClick.bind(this)
  }

  mouseMovement(event: any) {
    event.persist()

    this.setState(() => {
      return ({
        xPosition: event.pageX,
        yPosition: event.pageY
      })
    })
  }

  menuClick() {
    this.setState((prevState) => {
      return ({
        open: !prevState.open
      })
    })
  }

  render() {
    return (
      <div onMouseMove={this.mouseMovement.bind(this)} className="app">
        <Menu menuClick={this.menuClick} />
        <Eye xPosition={this.state.xPosition} yPosition={this.state.yPosition} />
        <Card open={this.state.open} />
      </div>
    );
  }
}

export default App;
