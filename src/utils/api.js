
export const fetchMovies = async (url) => {
	const res = await fetch(url, {
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${import.meta.env.VITE_AUTH_KEY}`,
		},
	});

	return res.json();
};