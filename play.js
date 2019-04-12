const {CasparCG} = require("casparcg-connection");

var connection = new CasparCG();

connection.play(1,1, "second");

(async () => {

    const playinfo = await connection.info(1,1);
    // console.log(JSON.stringify(playinfo.response.data[0].name));
    // console.log(JSON.stringify(playinfo.info(1,1)));

    console.log(JSON.stringify(playinfo.response.data.stage.layer.layer_1.foreground.file.time));
    // console.log(playinfo.response.data.stage.layer.layer_1.foreground.file.time);
    console.log(playinfo.response.data.stage);


    function testNum(a) {
        if (a > 0) {
            return "positive";
        } else {
            return "NOT positive";
        }
    }

    for (let o of playinfo.response.data) {
        // console.log(o.name);
        connection.play(1,1, o.name)

    }

})();
