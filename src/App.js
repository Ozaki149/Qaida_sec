import React, { Component } from 'react';
import logo from './logo.gif';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

class App extends React.Component{
  render(){
    return (<div>
        <MApp/>
      </div>)
  }
}
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };
 
  render() {
    return (
      <div class={"mapsize"}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCuzX73z736q70sUPZGQWb7vrtRpj7d5rc" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
      </div> 
    );
  }
}
const MApp = () => (
  <div className='app'>
    <Navigation />
    
    <Main />
  
  </div>
);
const Navigation = () => (
  <nav>
    <ul>
    <li><img src={logo} className="App-logo" alt="logo" /></li>
      <li class="eachh"><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li class="eachh"><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
      <li class="eachh"><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
    </ul>
  </nav>
);
const Home = () => (
  <div className='home'>
<SimpleMap/>
  </div>
);

const About = () => (
  <div className='about'>
    <h1>About Me</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>
);

const Contact = () => (
  <div className='contact'>
    <h1>Contact Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
  </Switch>
);
export default App;

