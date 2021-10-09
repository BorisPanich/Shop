import * as React from 'react'
import {PopupMenu} from '../PopupMenu/PopupMenu'

type SortPopupProps = {
   sortBy: string
   onSelect: (obj: FilterItemType) => void
}

export type FilterItemType = {
   value: 'rating' | 'price' | 'name'
   label: 'популярному' | 'цене' | 'алфавиту'
}

export type SortItemType = Array<FilterItemType>

export const SortPopup: React.FC<SortPopupProps> = ({sortBy = 'rating', onSelect}) => {

   const items: SortItemType = [
      {value: 'rating', label: 'популярному'},
      {value: 'price', label: 'цене'},
      {value: 'name', label: 'алфавиту'},
   ]

   const selected = items.find(obj => obj.value === sortBy)

   return (
       <div className="sort">
          <PopupMenu
              items={items}
              onClick={onSelect}
              activeItem={selected && selected.value}
          >
             <div className="sort__label">
                <b>Сортировка по:</b>
                <span>{selected && selected.label}</span>
             </div>
          </PopupMenu>
       </div>
   )
}

