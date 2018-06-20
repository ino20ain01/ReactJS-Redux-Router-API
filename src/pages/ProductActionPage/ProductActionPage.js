import React, { Component } from 'react';

class ProductsLitsPage extends Component {


    render() {

        return (
        <div className="col-md-6 col-md-offset-3">
            <form>
                <div className="form-group">
                    <label htmlFor="product-name">Tên sản phẩm: </label>
                    <input type="text" className="form-control" id="product-name" placeholder="Tên sản phẩm..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="product-price">Giá: </label>
                    <input type="number" className="form-control" id="product-price" placeholder="Giá..."/>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox"/>
                        Còn hàng
                    </label>
                </div>
                <button type="submit" className="btn btn-success">Lưu</button>
            </form>
        </div>
        );
    }
}

export default ProductsLitsPage;
