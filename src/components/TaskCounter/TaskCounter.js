import css from './TaskCounter.module.css';
import { useSelector } from 'react-redux';
import { getFilterStatus } from '../../redux/selectors';

export const TaskCounter = () => {
  const tasks = useSelector(getFilterStatus);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }

      return acc;
    },
    { completed: 0, active: 0 },
  );
  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
