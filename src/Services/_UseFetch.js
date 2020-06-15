
function useFetch(error, items, isLoaded, url) {
    let currentComponent = this;

    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        currentComponent.setState({
          isLoaded: true,
          items: result
        });
      }
    ).catch(
      (error) => {
        currentComponent.setState({
          isLoaded: false,
          error
        });
      }
    )

    return {error, items, isLoaded, url}
  }

  export default useFetch;
