function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function demo() {
    for (let i = 0; i < 5; i++) {
        console.log(`Waiting ${i} seconds...`);
        await sleep( 500);
    }
    console.log('Done');
}


export {sleep};

//
// const sleepNama = (round) => {
//     for(let i = 0;i < round;i++){
//
//     }
