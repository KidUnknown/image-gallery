

const fetchDataWithFetchAPI = (URL) => {
  this.setState({...this.state, isLoaded: true});
  fetch(URL)
    .then(response => response.json())
    .then(result => {
        this.setState({data: result, isLoaded: false})
    })
    .catch(e => {
        console.log(e);
        this.setState({...this.state, isLoaded: false});
    });
};

let useFetch = fetchDataWithFetchAPI;

export default useFetch;
