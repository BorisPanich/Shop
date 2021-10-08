import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions, cartSelectors } from '../u3-components/CartItem';
import { Categories } from '../u3-components/Categories';
import { pizzasActions, pizzaSelectors } from '../u3-components/PizzaBlock';
import { objForCart, PizzaBlock } from '../u3-components/PizzaBlock/PizzaBlock';
import { filtersActions, filterSelectors } from '../u3-components/SortPopup';
import { FilterItemType, SortPopup } from '../u3-components/SortPopup/SortPopup';
import { useActions } from '../utils/redux-utils';

export const Home: React.FC = (props) => {
    const pizzasItems = useSelector(pizzaSelectors.pizzasItemsSelectors)
    const pizzaIsLoading = useSelector(pizzaSelectors.pizzaIsLoadingSelectors)
    const cartItems = useSelector(cartSelectors.cartItemsSelectors)
    const filters = useSelector(filterSelectors.filtersSelectors)
    const { addToCartTC } = useActions(cartActions)
    const { fetchPizzasTC } = useActions(pizzasActions)
    const { setCategory, setSortBy } = useActions(filtersActions)
    const dispatch = useDispatch()

    const addItemsToCart = React.useCallback((obj: objForCart) => addToCartTC(obj)
        , [dispatch])

    const selectCategory = React.useCallback((index: number | null) => setCategory({ catIndex: index })
        , [dispatch])

    const selectSort = React.useCallback((filterObj: FilterItemType) => setSortBy({ name: filterObj.value })
        , [dispatch])

    const mappedPizza = pizzasItems && !pizzaIsLoading
        ? pizzasItems.map((item: any) => <PizzaBlock key={item.id}
            onAdd={addItemsToCart}
            cartItems={cartItems}
            isLoading={pizzaIsLoading}
            {...item} />)
        : [...Array(8).map((_, index) => <PizzaBlock key={index} isLoading={pizzaIsLoading} />)]

    React.useEffect(() => {
        fetchPizzasTC(filters)
    }, [dispatch, filters])

    React.useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={filters.category}
                    items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
                    onClick={selectCategory}
                />
                <SortPopup
                    sortBy={filters.sortBy}
                    onSelect={selectSort}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {console.log(pizzaIsLoading)}
            <div className="content__items">
                {
                    mappedPizza
                }
            </div>
        </div>
    )
}