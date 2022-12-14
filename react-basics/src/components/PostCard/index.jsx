import './style.css';
import P from 'prop-types';

export function PostCard({
  title, cover, body, id,
}) {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>
          {title}
          {' '}
          {id}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  title: P.string.isRequired,
  body: P.string.isRequired,
  cover: P.string.isRequired,
  id: P.number.isRequired,
};
