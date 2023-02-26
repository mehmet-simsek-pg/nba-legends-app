const url = `https://nbaplayers.onrender.com/api/v1/players`;
const response = async() => await fetch(url).then((response) => response.json());;
const players = async () => {
  try {
    response = await fetch(url).then((response) => response.json());
    console.log(response);
  } catch (error) {
    console.log(new Date(), error);
  }
};


export default response;

