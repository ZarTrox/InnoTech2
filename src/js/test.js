function requestData(link) {
    fetch(link)
        .then(response => response.json())
        .then(data => console.log(data));
}

function requestData2(link) {
    fetch(link)
    .then(response => response.json())
    .then(data => {
        for(elment in data){
            console.log(data[elment]["datum"])
        }
    });
}