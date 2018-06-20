import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ProductsList from '../../components/ProductsList/ProductsList'
import ProductItem from '../../components/ProductItem/ProductItem'

class ProductsLitsPage extends Component {

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

        // let { products } = this.props;
        let products = [];
        axios({
            method: 'GET',
            url: 'http://5b291df084ce2c0014d4d12f.mockapi.io/api/products',

        }).then(res => {
            products = res.data;
        }).catch(err => {
            console.log(err);
        });

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
