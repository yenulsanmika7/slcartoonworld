'use server';

export const fetchAllVideos = async (page: number) => {
    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`)
    const data = await response.json();
    console.log(data)
    return data
}