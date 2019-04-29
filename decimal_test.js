const {CasparCG} = require("casparcg-connection");
const Decimal = require('decimal.js-light');

// Decimal.set({
//     precision: 20,
//     rounding: Decimal.ROUND_HALF_UP,
//     toExpNeg: -7,
//     toExpPos: 21
// });


let connection = new CasparCG();


const playallfiles = async () => {

    const playfileinfo = await connection.thumbnailList();

    for (const o of playfileinfo.response.data) {
        await connection.play(1, 1, o.name);

        await new Promise((resolve) => setTimeout(() => {
            resolve();
        }, (300)));

        const playinfo = await connection.info(1, 1);
        const fileInfo = playinfo.response.data.stage.layer.layer_1.foreground.file;


        let timesecond = fileInfo.time[1];
        let timefirst = fileInfo.time[0];

        const newtimesecond = new Decimal(timesecond);

        // newtimesecond.equals(newtimefirst)


        console.log(newtimesecond.toFixed(3));


        const intervalId = setInterval(async () => {
            const playinfo2 = await connection.info(1, 1);
            timefirst = playinfo2.response.data.stage.layer.layer_1.foreground.file.time[0];
            const newtimefirst = new Decimal(timefirst);
            console.log(newtimefirst.toFixed(3), newtimesecond.toFixed(3));
        }, 300);

        await new Promise(resolve => setTimeout(resolve, timesecond * 1000 + 300));

        console.log('-- ISGROJO' + " " + o.name);
        clearTimeout(intervalId);
    }


    connection.stop(1, 1);
    console.log("Pabaiga");
    //rocess.exit(0);


};

playallfiles();
