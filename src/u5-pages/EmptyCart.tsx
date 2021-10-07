import React from 'react';
import cartEmptyImage from '../u1-assets/img/empty-cart.png';
import { Link } from 'react-router-dom';

export const EmptyCart: React.FC = () => {
    return (
        <div className="cart cart--empty">
            <h2>Корзина пустая <i>😕</i></h2>
            <p>
                Похоже вы не заказывали пиццу.<br />
                Чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={cartEmptyImage} alt="Empty cart" />
            <Link to='/' className="button button--black">
                <span>Вернуться назад</span>
            </Link>
        </div>
    )
}