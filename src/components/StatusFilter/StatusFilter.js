import { Button } from '../Button/Button';
import css from './StatusFilter.module.css';
import { statusFilters } from '../../redux/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterStatus } from '../../redux/selectors';
import { setFilterStatus } from '../../redux/actions';

export const StatusFilter = () => {
  const filter = useSelector(getFilterStatus);
  const dispatch = useDispatch();

  const handleChangeFilter = filter => dispatch(setFilterStatus(filter));

  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => handleChangeFilter(statusFilters.all)}
        selected={filter === statusFilters.all}
      >
        All
      </Button>
      <Button
        onClick={() => handleChangeFilter(statusFilters.active)}
        selected={filter === statusFilters.active}
      >
        Active
      </Button>
      <Button
        onClick={() => handleChangeFilter(statusFilters.completed)}
        selected={filter === statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
};
