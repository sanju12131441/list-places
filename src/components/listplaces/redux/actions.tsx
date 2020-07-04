const PREFIX = '@List';

export const FETCH_PLACES = `${ PREFIX }/FETCH_PLACES`
export const FETCH_PLACES_SUCCESS = `${ PREFIX }/FETCH_PLACES_SUCCESS`
export const FETCH_PLACES_FAILURE = `${ PREFIX }/FETCH_PLACES_FAILURE`

const fetchPlaces = () => ({
	type: FETCH_PLACES,
})

export {
	fetchPlaces,
}