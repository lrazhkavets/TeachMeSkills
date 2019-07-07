function ternOnKettle(hasWater) {
    return new Promise(cb);

    function cb(resolve, reject) {
        if (hasWater) {

            setTimeout(function () {
                resolve('Water');

            },2000);

        } else {
            reject('No Water');
        }
    }

}

function makeTea(water){
    return new Promise(function (resolve, reject) {
        if (water === 'Water') {

            setTimeout(function () {
                resolve('Tea');
            },3000);
        } else {
            reject('No boiled water');
        }
    })
}

function watchTV() {
    console.log('Watching TV');
}

function getHome() {
    console.log('I am home');
}

getHome();

ternOnKettle(true)
    .then(function (result) {
        return makeTea(result);
    })
    .then(function (result) {
        console.log(result);
    })   
    .catch(function (err) {
        console.info(err);
    });

    watchTV();