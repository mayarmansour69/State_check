import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: "Noah Miller",
      bio: "web Developer from Noah.",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBLo7116opOkL7J29zHKQmiW-Wpkaf5bNriqFwgJ8SVN6DXXaNw4trSyrWNooitYDzu4&usqp=CAU",
      profession: "Developer"
    },
    show: false,
    mountTime: new Date()
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);

    this.toggleInterval = setInterval(() => {
      this.toggleShow();
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.toggleInterval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountTime } = this.state;

    return (
      <div className="App">
        <h1>Toggle Person Profile</h1>
        <button onClick={this.toggleProfile}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since mount: {Math.floor((new Date() - mountTime) / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;
