let errorCodes = {
    404: "Not Found... Please check your URL",
    500: "The server is just borked...",
    403: "Do you have credit? If you have, please try again.",
    503: "Service is unavailable a while."
}

async function fetchData(sourceURL) {
        // ask for a resource, and then do something with it when it resolves
    let resource = await fetch(sourceURL).then(response => {
        if (response.status !== 200) {
            throw new Error(`Danger Will Robinson! Error ${response.status}: ${errorCodes[response.status]}`);
        } 
        
        return response;           
    });

    // fetch uses the Promise API, so it'll return with the resource or return false - either way, it resolves the promise

    // we'll assume success and pass through a parsed JavaScript object from the JSON data we get
    let dataset = await resource.json();

    return dataset[0];
    
    debugger;
}

async function postData(sourceURL) {
    // use fetch or Axios to post to a database here

    return "You are using the postData API endpoint";
}


export { fetchData, postData };