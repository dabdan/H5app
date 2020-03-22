import React, { Component } from 'react'

// import { Link } from 'dva/router';
import Chat from './Main/Chat.jsx'
import Home from './Main/Home.jsx'
import History from './Main/History.jsx'
import Person from './Main/Person.jsx'
import { HashRouter, Route, Switch,Link} from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <div>
         <HashRouter>
            <Switch>
              <Route path='/Main/Home' component={Home}></Route>
              <Route path='/Main/Chat' component={Chat}></Route>
              <Route path='/Main/History' component={History}></Route>
              <Route path='/Main/Person' component={Person}></Route>
            </Switch>
        </HashRouter>
        <h1>
          <Link to='/Main/Home'>首页</Link>
          <Link to='/Main/Chat'>聊天</Link>
          <Link to='/Main/History'>历史</Link>
          <Link to='/Main/Person'>个人</Link>
        </h1>
      </div>
    )
  }
}






