export default defineEventHandler((event) => {
    const id = [...event.node.req.url.split("/")].pop();
    const config = useRuntimeConfig();

    return $fetch(`${process.env.NUXT_API_KEY_URL}/movie/${id}?api_key=${process.env.NUXT_API_KEY}`,{
        method:'GET',
        headers:{
            "Content-Type": "application/json;charset=utf-8"
        },
    })
})