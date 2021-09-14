import axios from "axios";

const url = "https://gorest.co.in/public/v1/users";
const getUser = () => {
    return axios({
        url: url,
        method: "GET",
      })
    // axios
    //   .get(url)
      .then((response) => {
        console.log(response.data);
          return response
        
      })
      .catch((error) => {
        console.log(error);
        throw error
      });
  };
  export {
      getUser
  }