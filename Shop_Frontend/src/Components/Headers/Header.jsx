import React, { useContext, useState } from 'react'
import { Container } from 'reactstrap'
import Logo from '../../assets/images/eco-logo.png'
import userProfile from '../../assets/images/login/user-profile.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../../style/Header.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { CiHeart } from "react-icons/ci";
import { BiSolidCartAdd } from "react-icons/bi";
import Banner from '../Sections/Banner'
import Card from '../Sections/Cards'
import { FaUserCircle } from "react-icons/fa";
import UserContext from '../../Context/UserContext'



function Header() {
    const { User, setUser } = useContext(UserContext)
    const [toggle, setToggle] = useState()

    const nevigate = useNavigate()

    const NavigateCart = () => {
        nevigate('/cart')
    }

    const toggleBtn = () => {
        setToggle(!toggle)
    }

    const logOut = () => {
        setUser(null)
        localStorage.removeItem("user")
    }

    return (
        <>
            <Container>
                <nav>
                    <div className="Navbar  p-2">
                        <div className="Header_content d-flex justify-between">
                            <div className="logo">
                                <img src={Logo} alt="" />
                                <span>MultiMart</span>
                            </div>
                            <ul className="ul_list list-none d-flex gap-5">
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/shop'}>Shop</Link></li>
                                <li><Link to={'/cart'}>Cart</Link></li>
                                <li><Link to={'/contact'}>Contact</Link></li>
                            </ul>
                            <div className="user-indentify d-flex">
                                <div className="add-icons d-flex">
                                    <BiSolidCartAdd size={30} onClick={NavigateCart} />
                                    <span>1</span>
                                </div>
                                <div className="user_info d-flex" style={{ position: "relative" }}>
                                    {User ? (
                                        <>
                                            <div className="profile d-flex" onClick={toggleBtn}>
                                                <img src={userProfile} alt="user-profile" />
                                                <p>{User.userName}</p>
                                            </div>

                                            <div className={`${toggle ? "submenu" : "nonActive"}`}>
                                                <ul>
                                                    <li><Link>My Profile</Link></li>
                                                    <li onClick={() => logOut(logOut)}><Link>Logout</Link></li>
                                                    {/* <li>Settings</li> */}
                                                </ul>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <li><Link to="/login">Login</Link></li>
                                            <li><Link to="/Signup">Signup</Link></li>
                                        </>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div >
                </nav >
            </Container >
        </>
    )
}

export default Header
