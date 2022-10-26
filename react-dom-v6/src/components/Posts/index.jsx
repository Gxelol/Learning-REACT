import { useParams, useSearchParams } from 'react-router-dom';

export const Posts = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>Post {`id: ${id}`} {`QS: ${qs}`} </h1>
    </div>
  );
};
