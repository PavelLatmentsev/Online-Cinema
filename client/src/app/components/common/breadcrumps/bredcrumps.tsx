import { Params, Link, useMatches } from 'react-router-dom';
interface IMatches {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: {
    crumb: (param?: string) => React.ReactNode;
  };
}
const BreadCrumps = () => {
  const matches: IMatches[] = useMatches();
  console.log(matches);
  const crumbs = matches
    .filter(match => Boolean(match.handle?.crumb))
    .map(match => match.handle.crumb(match.data));

  return (
    <ol>
      <Link to={'/'}>Главная</Link>
      {crumbs.map((crumb, index) => (
        <li key={index}>{crumb}</li>
      ))}
    </ol>
  );
};
export default BreadCrumps;
