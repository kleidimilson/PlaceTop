import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Anunciar from './pages/anunciar/Anunciar';
import Sobre from './pages/sobre/Sobre';
import Anuncios from './pages/anuncios/anuncios';
import Detalhes from './pages/detalhes/detalhes';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/anunciar" component={Anunciar}/>
                <Route path="/sobre" component={Sobre}/>
                <Route path="/anuncios/:tipo" component={Anuncios}/>
                <Route path="/detalhes/:tipo/:id" component={Detalhes}/>
               
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;


