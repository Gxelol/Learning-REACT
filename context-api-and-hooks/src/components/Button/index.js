import P from 'prop-types';

export const Button = ({ children, onButtonClick, disabled = false }) => {
  return (
    <button disabled={disabled} type="button" onClick={onButtonClick}>{children}</button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  disabled: P.bool,
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
};
