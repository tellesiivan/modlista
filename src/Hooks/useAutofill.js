import { useState } from "react";

export default function useAutofill(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async ({ target: { value } }) => {
    setValue(value);
    const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=pk.eyJ1IjoidGVsbGVzaWl2YW4iLCJhIjoiY2tuZXl0NnUyMGRmODJxcGU3a3l2N3BmbyJ9.t547vHO7WqXNCKvROzms-g&autocomplete=true`;

    try {
      const response = await fetch(endpoint);
      const result = await response.json();

      result?.features && setSuggestions(result.features);
    } catch (error) {
      console.log(error, "Failed to get response: useAutofill ");
    }
  };

  return {
    value,
    setValue,
    onChange: handleChange,
    suggestions,
    setSuggestions,
  };
}
