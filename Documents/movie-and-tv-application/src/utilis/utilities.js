const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
const REACT_APP_ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;


 export const getMovies = async() => {

    try{
        const response = await fetch ( `${REACT_APP_BASE_URL}/3/movie/popular`,{
            method:'GET',
            headers:{
                Authorization: `Bearer  ${REACT_APP_ACCESS_TOKEN}`
            }
        });

        const result = await response.json();
        return result

    }
    catch (error){
        return error.message
    }

}
