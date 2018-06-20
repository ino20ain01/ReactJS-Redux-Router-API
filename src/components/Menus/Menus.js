import React, { Component } from 'react';

class Menus extends Component {
    render() {
        return (
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
        );
    }
}

export default Menus;
