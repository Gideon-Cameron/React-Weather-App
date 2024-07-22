import PropTypes from 'prop-types';

const TimeAndLocation = ({ weather: { formattedLocalTime, name, country } }) => {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-xl font-extralight'>{formattedLocalTime}</p>
      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='text-3xl font-medium'>{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

TimeAndLocation.propTypes = {
  weather: PropTypes.shape({
    formattedLocalTime: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export default TimeAndLocation;
