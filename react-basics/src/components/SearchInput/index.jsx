import './styles.css';
import P from 'prop-types';

export function SearchInput({ actionFn, inputValue }) {
  return (
    <input
      placeholder="Search here"
      className="inp-search"
      type="search"
      onChange={actionFn}
      value={inputValue}
    />
  );
}

SearchInput.propTypes = {
  actionFn: P.func.isRequired,
  inputValue: P.string.isRequired,
};
