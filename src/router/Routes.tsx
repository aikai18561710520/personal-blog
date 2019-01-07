import * as React from 'react'
import * as Loadable from 'react-loadable'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from '../containers/App'
import loading from './loading'
const Routes = [
    {
        component: () => import ('../containers/Articles'),
        path: '/'
    }, {
        component: () => import ('../containers/Login'),
        path: '/login'
    }, {
        component: () => import ('../containers/Articles'),
        path: '/articles'
    }, {
        component: () => import ('../containers/Categories'),
        path: '/categories'
    }
]

const RouterMap = () => (
    <Router>
        <App>
            <Switch>
                {Routes.map(c => (<Route
                    key={c.path}
                    exact={true}
                    path={c.path}
                    component={Loadable({loader: c.component, loading})}/>))}
            </Switch>
        </App>
    </Router>
)

export default RouterMap
