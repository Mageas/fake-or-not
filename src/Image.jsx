import PropTypes from 'prop-types'

function Image({ url }) {
  return (
    <div className="aspect-w-1 aspect-h-1 h-auto mx-auto m-5 rounded-bl-3xl rounded-tr-3xl overflow-hidden shadow-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl">
      <img className="object-cover" src={url} alt={url} />
    </div>
  );
}

Image.propTypes = {
  url: PropTypes.string,
};

export default Image;