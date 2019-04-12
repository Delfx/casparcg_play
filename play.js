const {CasparCG} = require("casparcg-connection");

let connection = new CasparCG();

connection.play(1,1, "first");

(async () => {
    const playinfo = await connection.info(1,1);

    let timefirst = playinfo.response.data.stage.layer.layer_1.foreground.file.time[0];
    let timesecond = playinfo.response.data.stage.layer.layer_1.foreground.file.time[1];

    console.log(timefirst);


    // for (let i = playinfo.response.data.stage.layer.layer_1.foreground.file.time[1]; i === playinfo.response.data.stage.layer.layer_1.foreground.file.time[0]; i++) {
    //     console.log(timefirst);
    // }




    // for (let o of playinfo.response.data.stage.layer.layer_1.foreground.file.time) {
    //     // console.log(o.name);
    //     console.log(o = playinfo.response.data.stage.layer.layer_1.foreground.file.time[1]);
    //
    //     break;
    // }
    //

    while (timefirst < timesecond ){
            console.log(playinfo.response.data.stage.layer.layer_1.foreground.file.time[0])
    }

})();



