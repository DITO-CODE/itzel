import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Inicio from './views/inicio.cmp';
import Ubicanos from './views/ubicanos.cmpt';
import Nosotros from './views/nosotros.cmpt';
import Plan from './views/plan.cmpt';
import Reticula from './views/reticula.cmpt';
import Admision from './views/admision.cmpt';
import Blog from './views/blog.cmpt';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(
    
    <BrowserRouter>
         <Switch>
            <Route path="/blog" component={Blog}  />
            <Route path="/admision" component={Admision}  />
            <Route path="/reticula" component={Reticula}  />
            <Route path="/plan" component={Plan}  />
            <Route path="/nosotros" component={Nosotros}  />
            <Route path="/ubicanos" component={Ubicanos}  />
            <Route path="/" component={Inicio}  />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
