import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SortType } from '../../const';
import { changeSortType } from '../../store/actions';
import { getCurrentSortType } from '../../store/offers/selectors';

import SortItem from '../sort-item/sort-item';

function Sort(): JSX.Element {
  const dispatch = useDispatch();
  const currentSortType = useSelector(getCurrentSortType);

  const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false);
  const sortTypes = Object.values(SortType);

  const handleSortingTypeClick = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  const handleSortTypeChange = (sortType: SortType) => {
    dispatch(changeSortType(sortType));
  };

  const handleSortingOptionClick = (sortType: SortType) => {
    if (sortType !== currentSortType) {
      handleSortTypeChange(sortType);
    }
    setIsDropdownOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortingTypeClick}
      >
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isDropdownOpened
        ? 'places__options--opened'
        : 'places__options--closed'}`}
      >
        {sortTypes.map((sortType) => (
          <SortItem
            key={sortType}
            sortType={sortType}
            currentSortType={currentSortType}
            onClick={handleSortingOptionClick}
          />
        ))}
      </ul>
    </form>
  );
}

export default Sort;
