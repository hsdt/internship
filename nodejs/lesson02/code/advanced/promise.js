var promise = new Promise((resolve, reject) => {

    setTimeout(function() {
        resolve(100);
    }, 3000);

});


promise.then(result => {
    console.log("Data return: ", result);
})
.catch(err => {
    console.error("ERROR: ", err);
});

