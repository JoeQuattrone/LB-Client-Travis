import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home'
import Songs from './containers/Songs'
import ShowSong from './containers/ShowSong'
import './App.css';
import { connect } from 'react-redux'
import { fetchSongs } from './actions/songActions'
import ErrorPage from './components/ErrorPage'


class App extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("songTitle")) {
      this.props.fetchSongs({songTitle: localStorage.getItem("songTitle")}, false)
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/songs" component={Songs}/>
          <Route path={`/songs/:songId`} component={ShowSong}/>
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default connect(null, { fetchSongs })(App);
