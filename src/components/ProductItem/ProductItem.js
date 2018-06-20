import React, {Component} from 'react';

class ProductItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>1</td>
                <td>IPhone 7 Plus</td>
                <td>500</td>
                <td>
                 <span className="label label-info">
                     Còn hàng
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
