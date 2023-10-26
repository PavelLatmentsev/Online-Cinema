import { Params, Link, useMatches } from 'react-router-dom';
import arrow from '../../../../../public/img/icons/arrowBread.svg';
import styles from './breadcrumps.module.scss';
interface IMatches {
  id: string;
  pathname: string;
  params: Params<string>;
  data: string | undefined;
  handle: {
    crumb: (param?: string) => React.ReactNode;
  };
}
const BreadCrumps = () => {
  const matches: IMatches[] = useMatches();

  const bruds = matches.filter(match => Boolean(match.handle?.crumb));
  const crumbs = bruds.map(match =>
    match.handle.crumb(
      match.params.movie
        ? match.params.movie.split('-').splice(0, 2).join('-')
        : '',
    ),
  );
  console.log('crumbs', bruds);
  return (
    <ul className={styles.breadcrumps__list}>
      <Link to={'/'}>Главная</Link>
      {crumbs.map((crumb, index) => (
        <li key={index} className={styles.breadcrumps__item}>
          <img src={arrow} alt="arrow" />
          {crumb}
        </li>
      ))}
    </ul>
  );
};
export default BreadCrumps;
