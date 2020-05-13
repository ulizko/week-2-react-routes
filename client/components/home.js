import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './header'
import Dashboard from './dashboard'
import Profile from './profile'
import Main from './main'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route exact path="/" component={() => <Dashboard />} />
            <Route exact path="/main" component={() => <Main />} />
            <Route exact path="/profile/:username" component={() => <Profile />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
