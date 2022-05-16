function requestData(link) {
    fetch(link)
        .then(response => response.json())
        .then(data => console.log(data));
}