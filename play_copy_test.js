const {CasparCG} = require("casparcg-connection");

let connection = new CasparCG();


// connection.play(1,1, "pirmas")
// connection.info(1,1);



(async()=> {

    const playfile = await connection.cinf("pirmas");
    console.log(JSON.stringify(playfile));

})();

