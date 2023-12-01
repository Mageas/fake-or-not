import PropTypes from 'prop-types'

function Button({ name, customCss, handleClick }) {
  return (
    <a
      onClick={handleClick}
      className={customCss + " hover:cursor-pointer group inline-block rounded p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"}
    >
      <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
        {name}
      </span>
    </a>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  customCss: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
