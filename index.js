const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey:  '67fad89f',
      s: searchTerm
    }
  });
  console.log(response.data);
};

const input = document.querySelector('input');

const onInput = event => {
  fetchData(event.target.value);
};
input.addEventListener('input', debouce(onInput, 500));
