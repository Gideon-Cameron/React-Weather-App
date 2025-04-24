import PropTypes from 'prop-types';

const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, name: 'London' },
    { id: 2, name: 'Sydney' },
    { id: 3, name: 'Tokyo' },
    { id: 4, name: 'Paris' },
    { id: 5, name: 'Toronto' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:justify-around my-6 px-2">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-gray-700/20 px-4 py-2 rounded-md transition ease-in"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

TopButtons.propTypes = {
  setQuery: PropTypes.func.isRequired,
};

export default TopButtons;
