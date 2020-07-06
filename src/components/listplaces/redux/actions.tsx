const PREFIX = '@List';

export const FETCH_PLACES = `${ PREFIX }/FETCH_PLACES`
export const FETCH_PLACES_SUCCESS = `${ PREFIX }/FETCH_PLACES_SUCCESS`
export const FETCH_PLACES_FAILURE = `${ PREFIX }/FETCH_PLACES_FAILURE`
export const SAVE_FAVOURITE_PLACES = `${ PREFIX }/SAVE_FAVOURITE_PLACES`

const fetchPlaces = () => ({
	type: FETCH_PLACES,
})

const addFavouritePlaces = (payload) => ({
	type: SAVE_FAVOURITE_PLACES,
	data:payload
})

export {
	fetchPlaces,
	addFavouritePlaces,
}