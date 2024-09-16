import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className="navbar-items">
            <li className="navbar-item">
                <a href="/">Trang chủ</a>
            </li>
            <li className="navbar-item">
                <a href="/sanpham">Sản phẩm</a>
            </li>
            <li className="navbar-item">
                <a href="/danhmuc">Danh mục</a>
            </li>
            <li className="navbar-item">
                <a href="/lienhe">Liên hệ</a>
            </li>
            <li className="navbar-item">
                <a href="/giohang">Giỏ hàng</a>
            </li>
            <li className="navbar-item">
                <a href="/user">Người dùng</a>
            </li>
        </ul>
    </div>
  )
}
