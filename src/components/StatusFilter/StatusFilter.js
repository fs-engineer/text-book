import { Button } from '../Button/Button';
import css from './StatusFilter.module.css';
import { statusFilters } from '../../redux/constants';
import { useSelector } from 'react-redux';
import { getFilterStatus } from '../../redux/selectors';

export const StatusFilter = () => {
  const filter = useSelector(getFilterStatus);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
