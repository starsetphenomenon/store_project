import './AlsoCard.scss';
import { Component } from "react";
import React from 'react';


class AlsoCard extends Component {
    render() {

        const {
            img,
            title,
            price,
            status,
            className,
        } = this.props;

        return (
            <div className={className}>
                <div className='also-card'>
                    <div className="item-text">
                        <a alt="itemKnife" href=".">{title}</a>
                        <div className="item-price">
                            <p>{price}</p>
                            <p className="new-product">{status}</p>
                        </div>
                    </div>
                    <div className="item-img" >
                        <a href=".">
                            <img alt="itemKnife" src={img}></img>
                        </a>
                        <div className="plus">
                            <img alt="itemKnife" src='./assets/icons/plus.svg'></img>
                            <img alt="itemKnife" className="basket" src='./assets/icons/cart.svg'></img>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

AlsoCard.defaultProps = {
    img: './assets/img/knifeCatalog.png',
    title: 'Складной нож SQ01-B',
    price: '850$',
    className: 'item-card'
};

export default AlsoCard;