
const GetMoviesDetails = async ({params}) => {
    console.log("Params received:", params); // ✅ Check this!
    const id = params.movieID;
    console.log("Movie ID:", id); // ✅ Should be like "tt3896198"
   
   try {
      const response = await  fetch(`https://www.omdbapi.com/?i=${id}&apikey=48b891e4`);
        const data = await response.json();
        console.log("Fetched Data:", data);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default GetMoviesDetails;