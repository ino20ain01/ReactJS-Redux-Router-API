import React, { Component } from 'react';
import apiCaller from '../../utils/apiCaller';

class ProductsLitsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }

    onChange = e => {
        let target = e.target,
            name = target.name,
            value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = e => {
        e.preventDefault();
        let { txtName, txtPrice, chkbStatus } = this.state;
        apiCaller('products', 'POST', {
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }).then(res => {
            console.log(res);
        });
    }

    render() {

        let { txtName, txtPrice, chkbStatus } = this.state;

        return (
        <div className="col-md-6 col-md-offset-3">
            <form onSubmit={ this.onSave }>
                <div className="form-group">
                    <label htmlFor="product-name">Tên sản phẩm: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="product-name"
                        placeholder="Tên sản phẩm..."
                        name="txtName"
                        value={ txtName }
                        onChange={ this.onChange }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="product-price">Giá: </label>
                    <input
                        type="number"
                        className="form-control"
                        id="product-price"
                        placeholder="Giá..."
                        name="txtPrice"
                        value={ txtPrice }
                        onChange={ this.onChange }
                    />
                </div>
                <div className="checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="chkbStatus"
                            value={ chkbStatus }
                            onChange={ this.onChange }
                        />
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
