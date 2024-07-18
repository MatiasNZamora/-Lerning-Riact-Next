

export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=865dO13Znu8t8y3f7bvIhgd1ur4wSFxJ`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
};