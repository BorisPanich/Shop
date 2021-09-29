import React, { useState } from 'react';

type CategoriesPropsType = {
    activeCategory?: number | null
    items: Array<string>
    onClick: (name: string) => void
}

export const Categories: React.FC<CategoriesPropsType> = (
    {
        items,
        onClick
    }
) => {

    let [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (index: any) => {      //!!!!!!!!!!!! ANY
        setActiveItem(index)
    }

    const categoriesArray = items && items
        .map((name, index) => (
            <li key={`${name}_${index}`}
                onClick={() => onSelectItem(index)}
                className={activeItem === index ? 'active' : ''}
            >{name}</li>))

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}>Все</li>
                {categoriesArray}
            </ul>
        </div>
    )
}