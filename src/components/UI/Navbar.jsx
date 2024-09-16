import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className="navbar-items">
            <li className="navbar-item">
                <Link to="/">Trang chủ</Link>
            </li>
            <li className="navbar-item">
                <Link to="/sanpham">Sản phẩm</Link>
            </li>
            <li className="navbar-item">
                <Link to="/danhmuc">Danh mục</Link>
            </li>
            <li className="navbar-item">
                <Link to="/lienhe">Liên hệ</Link>
            </li>
            <li className="navbar-item">
                <Link to="/giohang">Giỏ hàng</Link>
            </li>
            <li className="navbar-item">
                <Link to="/user">Người dùng</Link>
            </li>
        </ul>
    </div>
  )
}
