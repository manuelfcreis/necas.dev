import React, { Component } from 'react';
import Card from './card.tsx'
import Experience from './experience.tsx'
import Tag from './tags.tsx';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    const items = ['Ruby on Rails', 'Javascript']
    return (
      <div className="App">
        <h1>Manuel Costa Reis</h1>
        <div className='app-body'>
          <div className='left'>
            <Card header='Profile'>
              <p>teste</p>
            </Card>
          </div>

          <div className='right'>
            <Card>
              <h2>Work Experience</h2>
              <Experience dates='2017-current'>
                <h5>Landing.jobs</h5>
                <p>
                  <span className='regular-weight'>Data Scientist & Software Developer</span>
                  <br />
                  Developer etc.
                </p>
                <Tag names={items} />
              </Experience>


              <hr />
              <h2>Education</h2>
              <p></p>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
