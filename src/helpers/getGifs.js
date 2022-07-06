export const getGif = async(category) => {

	const url = `https://api.giphy.com/v1/gifs/search?api_key=x9aVkQmy0lqfOqhv0fVsd69N1gQp3Hfh&q=${ category }&limit=10`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map( img => ({ 
		id:    img.id,
		title: img.title,
		url:   img.images.downsized_medium.url
	 }) );
	
	return gifs;

}