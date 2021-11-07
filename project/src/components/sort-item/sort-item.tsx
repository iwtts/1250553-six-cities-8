import { SortType } from '../../const';

type SortItemProps = {
  sortType: SortType,
  currentSortType: SortType,
  onClick: (sortType: SortType) => void,
}

function SortItem ({sortType, currentSortType, onClick}: SortItemProps): JSX.Element {
  const handleClick = () => {
    onClick(sortType);
  };

  return (
    <li
      key={sortType}
      className={`places__option ${sortType === currentSortType
        ? 'places__option--active'
        : ''}`}
      onClick={handleClick}
      tabIndex={0}
    >
      {sortType}
    </li>
  );
}

export default SortItem;
