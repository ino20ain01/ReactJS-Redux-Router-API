import React, { Component } from 'react';
import { connect } from 'react-redux';
import apiCaller from '../../utils/apiCaller'
import ProductsList from '../../components/ProductsList/ProductsList'
import ProductItem from '../../components/ProductItem/ProductItem'

class ProductsLitsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        apiCaller('products', 'GET', null)
            .then(res => {
                this.setState({
                    products: res.data
                });
            });
    }

    showProducts = products => {
        let result = []
        if (products.length) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={ index }
                        product={ product }
                        index={ index }
                    />
                );
            });
        }
        return result
    }

    render() {

        let { products } = this.state;

        return (
        <div className="col-md-12">
            <button type="button" className="btn btn-success mb-10">
                Thêm Sản Phẩm
            </button>
            <ProductsList>
                { this.showProducts(products) }
            </ProductsList>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductsLitsPage);
