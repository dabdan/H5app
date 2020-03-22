import React, { Component } from 'react'
import Login from './pages/Login.jsx'
import Reg from './pages/Reg.jsx'
import Main from './pages/Main.jsx'
import Error from './pages/Error.jsx'
import Loca from './pages/Jump/Loca.jsx'
import Map from './pages/Jump/Map.jsx'
import Search from './pages/Jump/Search.jsx'

import { HashRouter, Route, Switch,Redirect } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
            <Switch>
                <Route path='/Main' component={Main}></Route>
                <Route path='/Login'  component={Login}></Route>
                <Route path='/Reg'  component={Reg}></Route>
                <Route path='/Loca'  component={Loca}></Route>
                <Route path='/Map'  component={Map}></Route>
                <Route path='/Search'  component={Search}></Route>
                {/* 重定向 */}
                <Redirect from='/' to='/Main/Home'></Redirect>
                {/* 输入错误时候跳转的页面 */}
                <Route component={Error}></Route>
            </Switch>
        </HashRouter>
      </div>
    )
  }
}

