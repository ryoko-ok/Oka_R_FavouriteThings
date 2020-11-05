(() => {
    // start with a Fetch all
    fetch('./includes/functions.php')
        .then(res => res.json()) // parse the JSON (translate) back to plain JS
        .then(data => {
            // this is our data (DataSet.json)
            // converted to a plain JavaScript object
            handleDataSet(data);
        })
    .catch((error) => console.log(error));


    // this receives the data payload from our AJAX request, parses it (turns the returned JSON object back into a plain JavaScript object) and renders the data to our view (the markup in index.html)
    function handleDataSet(data) {
        let favouriteSection = document.querySelector('.favourite-section'),
            favouriteTemplate = document.querySelector('#favourite-template').content;

        debugger;

        // loop through the JavaScript object and for each user, make a copy of the user template we find at the bottom of index.html, populate it with the user's data, and put that fresh copy in the users section in index.html

        for (let favourite in data) {
            let currentFavourite = favouriteTemplate.cloneNode(true),
                currentFavouriteText = currentFavourite.querySelector('.favourite').children;

            currentFavouriteText[1].src = `images/${data[favourite].avatar}`;
            currentFavouriteText[2].textContent = data[favourite].name;
            currentFavouriteText[3].textContent = data[favourite].type;
            currentFavouriteText[4].textContent = data[favourite].history;
            currentFavouriteText[5].textContent = data[favourite].reason;

            // add this new user to the view
            favouriteSection.appendChild(currentFavourite);
        }
    }

    // we can add a catch handler to a thenable if things go wrong during our data retrieval attempt
    // really, we should move all of this to an external class or function and pass arguments into it.

    // that would make it really flexible and able to handle all kinds of requests and we could pass in a callback depending on what we want to do with our data

    // but then we'd be on our way to rewriting the Axios API (you should research it)
    // fetchData("./includes/functions.php").then(data => handleDataSet(data)).catch(err => { console.log(err); popErrorBox(err); });
})();