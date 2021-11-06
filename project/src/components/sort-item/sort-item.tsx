import { SortType } from '../../const';

type SortItemProps = {
  sortType: SortType,
  currentSortType: SortType,
  onClick: () => void,
}

function SortItem ({sortType, currentSortType, onClick}: SortItemProps): JSX.Element {
  return (
    <li
      key={sortType}
      className={`places__option ${sortType === currentSortType
        ? 'places__option--active'
        : ''}`}
      onClick={onClick}
      tabIndex={0}
    >
      {sortType}
    </li>
  );
}

export default SortItem;
