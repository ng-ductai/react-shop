import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo-2.png'

const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hành",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    }
]

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <Grid 
                    col={4} 
                    mdCol={2} 
                    smCol={1} 
                    gap={10}
                >
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="logo" />
                            </Link>
                        </p>
                        <p>
                            Chúng tôi luôn cung cấp lại những sản phẩm tốt nhất cho bạn.
                        </p>
                    </div>
                    <div>
                        <div className="footer__title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="footer__content">
                            <p>
                                <a href="tel:0358231903">Liên hệ đặt hàng</a>
                            </p>                            
                            <p>
                                <a href="tel:0358231903">Góp ý, khiếu nại</a>   
                            </p>                           
                            
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Về chúng tôi
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }                            
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Chăm sóc khách hàng
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }                            
                        </div>
                    </div>
                </Grid>
            </div>
            
        </footer>
    )
}

export default Footer
