//EXEKUTATZEKO NODE nodeAsinkroniaAriketa.js egin!!!!!!!!!
//Horretarako terminalean egon beharra duzue NodeAsinkronia karpeta gainean, gogoratu cd komandoataz


const os = require("os"); //os erabiltzeko
const path = require("path"); //path erabiltzeko

const fs = require("fs").promises;


let espezifikazioak = {
    Sistemaeragilea: os.platform(), //SE
    Arkitektura: os.arch(),//Arkitektura
    CPUa: os.cpus()[0].model,//CPU
    Erabiltzailea: os.userInfo().username//ErabiltzaileIzena
};
let array=[]
array.push(espezifikazioak);


const karpeta = path.join(__dirname, 'inbentarioa'); //Sortu path bat inbantarioa arte __dirname--> hau dagoen direktorioaren ruta
const fitxategia = path.join(karpeta, "sistema.json");//Sortu  karpeta + sistema.json



async function sortuinbentarioa() {
    console.log("Inbentarioa sortzen hasi da...");
    try {

        await fs.mkdir(karpeta, { recursive: true }); //Sortu beharrezkoak diren karpetak
        console.log(`'${karpeta}' karpeta sortu da.`);


        await fs.writeFile(fitxategia, JSON.stringify(espezifikazioak));//fitxategi azpian idatzi
        console.log(`'${fitxategia}' fitxategian idatzi da.`);

        const data = await fs.readFile(fitxategia, 'utf-8');

        console.log("\nFitxategiaren edukia irakurrita:");
        console.log(JSON.parse(data));

    } catch (error) {
        console.error("Errore bat gertatu da:", error);
    }
}


sortuinbentarioa();