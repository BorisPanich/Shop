import * as React from 'react';

type CategoriesProps = {
   activeCategory: number | null
   items: Array<string>
   onClick: Function
}

export const Categories: React.FC<CategoriesProps> =
   ({ activeCategory, items, onClick }) => {

      const mappedCategories = items && items
         .map((item, index) => (
            <li
               key={index}
               onClick={onClick.bind(this, index)}
               className={activeCategory === index ? 'active' : ''}>
               {item}
            </li>
         ))
      return (
         <div className="categories">
            <ul>
               {mappedCategories}
            </ul>
         </div>
      )
   }
