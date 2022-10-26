import { useEffect } from 'react';
import {
  useHistory,
  useLocation,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';

export const Abc = () => {
  const { slug, id } = useParams();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 4000);
  }, [history]);

  return (
    <div>
      <h1>
        ABC {slug}
        {id}
      </h1>
    </div>
  );
};
