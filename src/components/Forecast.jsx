import PropTypes from 'prop-types';

const Forecast = ({ title, data }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-start mt-6 px-2 sm:px-0">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 py-3">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-24"
          >
            <p className="font-light text-sm text-center">{d.title}</p>
            <img
              src={d.icon}
              alt="weather icon"
              className="w-12 my-1"
              loading="lazy"
            />
            <p className="font-medium text-center">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Forecast.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temp: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Forecast;
