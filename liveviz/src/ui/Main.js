import React from 'react'
import '../styles/index.css'
import { v4 } from 'node-uuid'
import App from '../logic/App'

const Main = () =>
<App
  key={
    //TODO Yehonathan 2017, May 19: get rid of the key - without it hot reload doesn't work
    v4()
  }
  />


export default Main
