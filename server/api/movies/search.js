export default defineEventHandler((event) => {
    const {query , page } = getQuery(event);
    const config = useRuntimeConfig();
    return $fetch(`${process.env.NUXT_API_KEY_URL}/search/movie?api_key=${process.env.NUXT_API_KEY}&query=${query}&page=${page}`,{
        method:'GET',
        headers:{
            "Content-Type": "application/json;charset=utf-8"
        },
    })
})
