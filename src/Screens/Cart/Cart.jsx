import './Cart.scss';

import React from 'react'
import InputNumber from '../../Components/InputNumber/InputNumber';

export default function Cart({ data }) {
    return (
        <div className='Cart'>
            <div className="top">
                <div className="back">
                    <img src="./assets/icons/arrow-toRight.svg" alt="." />
                    <h4>К покупкам</h4>
                </div>
                <h2>Корзина</h2>
            </div>
            <div className="mid">
                <ul className="items">
                    {data.map(el => {
                        return (
                            <li key={el.id} className="item">
                                <div className="item_name">
                                    <img src={el.imgSrc} alt={el.imgAlt} />
                                    <h3>{el.name}</h3></div>
                                <div className="item_info">
                                    <InputNumber />
                                    <div className="price">{el.price} ₴</div>
                                    <div className="close">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className="total">
                    <h3>К оплате:</h3>
                    <div className="totalPrice">{750} UAH</div>
                </div>
            </div>
            <div className="bottom">
                <h3>Для подтверждения заказа - введите ваши данные и мы перезвоним вам</h3>
                <form action=".">
                    <div className="info">
                        <div className="info_item required">
                            <p className="name">Получатель</p>
                            <input pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)" spellCheck="false" placeholder='Имя Фамилия' type="text" />
                        </div>
                        <div className="info_item required">
                            <p className="name">Мобильный телефон</p>
                            <input pattern="((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))" spellCheck="false" placeholder='+38(0**)___-__-__' type="tel" />
                        </div>
                        <div className="info_item">
                            <p className="name">E-mail</p>
                            <input pattern="[^@\s]+@[^@\s]+\.[^@\s]+" spellCheck="false" placeholder='Ваша почта' type="email" />
                        </div>
                    </div>
                    <div className="send">
                        <div className="policy">
                            Нажимая «Выбрать способ доставки», подтверждаю, что я ознакомлен с условиями
                            <a href="."> Публичного договора оферты</a> и <a href=".">Политикой конфиденциальности</a>,
                            а также согласен получать информационную рассылку
                        </div>
                        <button>Отправить форму</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
