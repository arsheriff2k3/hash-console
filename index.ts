import axios from 'axios';

interface Response {
    q: string,
    hash: string
}

async function fetchData(query: string) {
  const apiUrl = `https://challenge-server.code-check.io/api/hash?q=${query}`;

  try {
    const response = await axios.get(apiUrl);
    const resData: Response = response.data

    return resData.hash
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

async function main() {
    const query = 'fizz';
    const hash = await fetchData(query);
    if(hash){
    console.log(hash)
    }else {
        console.log("string")
    }
}

main();



