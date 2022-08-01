import MapboxAutocomplete from "react-mapbox-autocomplete";

export default function AutoComplete() {
  return (
    <MapboxAutocomplete
      publicKey="pk.eyJ1IjoidGVsbGVzaWl2YW4iLCJhIjoiY2tuZXl0NnUyMGRmODJxcGU3a3l2N3BmbyJ9.t547vHO7WqXNCKvROzms-g"
      inputClass="form-control search"
      onSuggestionSelect={(result, lat, lng, text) =>
        console.log(result, lat, lng, text)
      }
      country="us"
      placeholder="Long Beach, CA"
      resetSearch={false}
    />
  );
}
