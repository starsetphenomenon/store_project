import { React } from 'react'
import "./Menu.scss";
import { NavLink } from 'react-router-dom';

export default function Menu({ menuVisibility, menuStatus, menuLinks, menuSubLinks }) {

    return (
        <div className={menuStatus ? 'Menu active' : 'Menu'}>
            <div onClick={menuVisibility} className='Menu__wrapper'></div>
            <div className="Menu__content">
                <div className="close" onClick={menuVisibility}>
                    <span></span>
                    <span></span>
                </div>
                <ul className='filterLinks'>
                    <li onClick={menuVisibility}><NavLink to="/">Главная</NavLink></li>
                    {menuLinks.map((link, i) => {
                        return <li onClick={menuVisibility} key={i}><NavLink to="catalog">{link}</NavLink>
                            <div className='lunges'>
                                {menuSubLinks.map((subLink, ind) => {
                                    if (subLink[link] !== undefined) {
                                        return <NavLink to="catalog" onClick={menuVisibility} key={ind} href=".">{subLink[link]}</NavLink>                                    }
                                    return null
                                })}
                            </div>
                        </li>
                    })}
                </ul>
                <ul className='mainLinks'>
                    <li><a href=".">О компании</a></li>
                    <li><a href=".">Контакты</a></li>
                </ul>
            </div>
        </div>
    )
}