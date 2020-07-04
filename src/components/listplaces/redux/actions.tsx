const PREFIX = '@List';

export const FETCH_PLACES = `${ PREFIX }/FETCH_PLACES`

const fetchPlaces = () => ({
	type: FETCH_PLACES,
})

export {
	fetchPlaces,
}