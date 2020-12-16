import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Media from './components/Media'
import About from './components/About'
import NavBar from './components/NavBar'


function App() {
   return (
      <BrowserRouter>
      <NavBar />
         <Switch>
            <Route component={Home} path='/' exact />
            <Route component={Media} path='/media' />
            <Route component={About} path='/about' />
            <Route component={Contact} path='/contact' />
         </Switch>
      </BrowserRouter>
   )
}

export default App;
