import React from 'react'
import { BrowserRouter , Switch , Router, Route, Link} from 'react-router-dom'

import Productos from '../views/productos'
import Home from '../views/home'
import PageNotFound from '../views/notFound'
/* import Sample from './form/sample' */


function Main(){
  
    return (
        <main className="content">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/productos" component={Productos}/>
                    <Route  component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        </main>
            )
        

}

export default Main