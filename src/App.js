import React, {Component, Fragment} from 'react';
import './App.css';
import Menus from './components/Menus/Menus'
import ProductsList from './components/ProductsList/ProductsList'

class App extends Component {
    render() {
        return (
            <Fragment>
                {/* MENU */}
                <Menus />
                <div className="container">
                     <div className="row">
                         <div className="col-md-12">
                             <button type="button" className="btn btn-success mb-10">
                                 Thêm Sản Phẩm
                             </button>
                             <ProductsList />
                         </div>
                     </div>
                </div>
            </Fragment>
        );
    }
}

export default App;
