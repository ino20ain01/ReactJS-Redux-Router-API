import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes'
import './App.css'
import Menus from './components/Menus/Menus'
import ProductsList from './components/ProductsList/ProductsList'

class App extends Component {

    showContentMenus = routes => {
        let result = []
        if (routes.length) {
            result = routes.map((route, index) => {
                return (
                    <Route
                    key={ index }
                    path={ route.path }
                    exact={ route.exact }
                    component={ route.main }
                    />
                );
            })
        }
        return <Switch>{ result }</Switch>
    }

    render () {
        return (
        <Router>
            <Fragment>
                { /* MENU */ }
                <Menus/>
                <div className="container">
                    <div className="row">
                        { /*<div className="col-md-12">*/ }
                        { /*<button type="button" className="btn btn-success mb-10">*/ }
                        { /*Thêm Sản Phẩm*/ }
                        { /*</button>*/ }
                        { /*<ProductsList />*/ }
                        { /*</div>*/ }
                        { this.showContentMenus(routes) }
                    </div>
                </div>
            </Fragment>
        </Router>
        )
    }
}

export default App
