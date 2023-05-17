import axios from "axios";

async function getCountry() {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response;
}

export default getCountry;
