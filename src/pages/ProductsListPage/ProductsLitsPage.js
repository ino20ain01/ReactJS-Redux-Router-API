import React, { Component } from 'react';
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

        let products = [];

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

export default ProductsLitsPage;
