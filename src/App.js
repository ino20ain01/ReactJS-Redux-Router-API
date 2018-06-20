import React, {Component, Fragment} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand">Call API</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a>Trang chủ</a>
                            </li>
                            <li>
                                <a>Quản lý sản phẩm</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                     <div className="row">
                         <div className="col-md-12">
                             <button type="button" className="btn btn-success mb-10">
                                 Thêm Sản Phẩm
                             </button>
                             <div className="panel panel-primary">
                                 <div className="panel-heading">
                                     <h3 className="panel-title">Danh sách sản phẩm</h3>
                                 </div>
                                 <div className="panel-body">
                                     <table className="table table-bordered table-hover">
                                         <thead>
                                         <tr>
                                             <th>STT</th>
                                             <th>Mã</th>
                                             <th>Tên</th>
                                             <th>Giá</th>
                                             <th>Trạng thái</th>
                                             <th>Hành dộng</th>
                                         </tr>
                                         </thead>
                                         <tbody>
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
                                         </tbody>
                                     </table>
                                 </div>
                             </div>
                         </div>
                     </div>
                </div>
            </Fragment>
        );
    }
}

export default App;
