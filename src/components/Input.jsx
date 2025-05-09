import { useState } from 'react';
import PropTypes from 'prop-types';
import { BiSearch, BiCurrentLocation } from 'react-icons/bi';

const Input = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== '') setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center my-6 gap-4 w-full px-4">
      {/* Search Input & Icons */}
      <div className="flex flex-row w-full sm:w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="search by city..."
          className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
        />
        <BiSearch
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <BiCurrentLocation
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      {/* Unit Toggle */}
      <div className="flex flex-row w-full sm:w-1/4 items-center justify-center sm:justify-end">
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits('metric')}
        >
          °C
        </button>
        <p className="text-2xl font-medium mx-1">|</p>
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits('imperial')}
        >
          °F
        </button>
      </div>
    </div>
  );
};

Input.propTypes = {
  setQuery: PropTypes.func.isRequired,
  setUnits: PropTypes.func.isRequired,
};

export default Input;
