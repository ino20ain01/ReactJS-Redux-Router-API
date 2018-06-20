import React, {Component} from 'react';

class ProductItem extends Component {

    render() {

        let { product, index } = this.props;
        let statusName = product.status ? 'Còn hàng' : 'Hết hàng';
        let statusClass = product.status ? 'info' : 'danger';
        return (
            <tr>
                <td>{ ++index }</td>
                <td>{ product.id }</td>
                <td>{ product.name }</td>
                <td>{ product.price }</td>
                <td>
                 <span className={`label label-${statusClass}`}>
                     { statusName }
                 </span>
                </td>
                <td>
                    <button type="button" className="btn btn-primary">
                        Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
