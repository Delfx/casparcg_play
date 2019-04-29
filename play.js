const {CasparCG} = require("casparcg-connection");

let connection = new CasparCG();

(async () => {
    // ciklas
        // await broadcasting()


    await connection.play(1, 1, "pirmas");
})();





const broadcasting = async () => {
    const playinfo = await connection.info(1, 1);

    const fileInfo = await playinfo.response.data.stage.layer.layer_1.foreground.file;

    console.log(fileInfo);

    if (!fileInfo || !('time' in fileInfo)) {
        broadcasting();
    }

    let timefirst = fileInfo.time[0];
    let timesecond = fileInfo.time[1];

    if (timesecond === 0) {
       broadcasting();
    }


    // setTimeout
    // setInterval

    // clearTimeout
    // clearInterval


    const intervalId = setInterval(async () => {

        const lastnumber = timesecond - timefirst;

        if (lastnumber < 0.3) {
            clearTimeout(intervalId);

            console.log('-- ISGROJO');

            connection.play(1, 1, "antras");

            return;
        }

        const playinfo2 = await connection.info(1, 1);
        timefirst = playinfo2.response.data.stage.layer.layer_1.foreground.file.time[0];
        console.log(playinfo2.response.data.stage.layer.layer_1.foreground.file.time[0], timesecond);
    }, 100);

};

broadcasting();



