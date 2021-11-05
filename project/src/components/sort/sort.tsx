import { Dispatch, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { SortType } from '../../const';
import { changeSortType } from '../../store/actions';
import { State } from '../../types/state';
import { Actions } from '../../types/action';

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
  const [dropdownOpened, setDropdownOpened] = useState<boolean>(false);
  const sortTypes = Object.values(SortType);

  const onSortTypeClick = (sortType: SortType): void => {
    if (sortType !== currentSortType) {
      onSortTypeChange(sortType);
    }
    setDropdownOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setDropdownOpened(!dropdownOpened)}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${dropdownOpened
        ? 'places__options--opened'
        : 'places__options--closed'}`}
      >
        {sortTypes.map((sortType) => (
          <li
            key={sortType}
            className={`places__option ${sortType === currentSortType
              ? 'places__option--active'
              : ''}`}
            onClick={() => onSortTypeClick(sortType)}
            tabIndex={0}
          >{sortType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export { Sort };
export default connector(Sort);
