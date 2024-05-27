import PropTypes from 'prop-types';

const Testimonial = ({ testimonial }) => {
  const { name, position, content, image } = testimonial;

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-5">
            <div className="md:flex-shrink-0 flex items-center justify-center">
                <img className="h-24 w-24 object-cover rounded-full" src={image} alt={name} />
            </div>
            <div className="block pt-2 text-lg leading-tight font-medium text-black text-center">{name}</div>
            <p className="pt-2 text-gray-500 text-center">{content}</p>
            <div className="pt-6 text-sm text-indigo-500 font-semibold text-center">{position}</div>
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
    testimonial: PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
};  

export default Testimonial;