import { Dispatch, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { SortType } from '../../const';
import { changeSortType } from '../../store/actions';
import { State } from '../../types/state';
import { Actions } from '../../types/action';

import SortItem from '../sort-item/sort-item';

const mapStateToProps = ({currentSortType}: State) => ({
  currentSortType,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSortTypeChange(sortType: SortType) {
    dispatch(changeSortType(sortType));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Sort({currentSortType, onSortTypeChange}: PropsFromRedux): JSX.Element {
  const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false);
  const sortTypes = Object.values(SortType);

  const handleSortingTypeClick = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  const handleSortingOptionClick = (sortType: SortType) => {
    if (sortType !== currentSortType) {
      onSortTypeChange(sortType);
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

export { Sort };
export default connector(Sort);
