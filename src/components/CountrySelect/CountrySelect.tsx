import React from 'react';
import { useQuery } from 'react-apollo-hooks';

import { formatPrice } from '../../utilities/utilities';

import { GET_AVAILABLE_COUNTRIES } from './CountrySelect.vendure';

export function CountrySelect(props) {
  const { data, loading, error } = useQuery(GET_AVAILABLE_COUNTRIES);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="select">
      <select {...props}>
        {data.availableCountries.map(country => (
          <option key={country.id} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
