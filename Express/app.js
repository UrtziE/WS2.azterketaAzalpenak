
let path= require("path")
const express = require("express");
let fs=require("fs").promises
let app= express()
const PORT=3000;
const PATHKARPETA= path.join(__dirname,"PertsonaKarpeta");
const PATHFITXATEGI= path.join(PATHKARPETA, "pertsonak.json")
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'));
app.listen(PORT, ()=>{
    console.log(`Zerbitzaria entzuten http://localhost:${PORT}`)
})

app.get("/",(req,res)=>{
    res.send("Kaixo");
})

app.get("/pertsonak",async (req,res)=>{
     let emaitza= await konprobatuFitxategiaSortutaDagoen();
     res.json(emaitza)
});
app.post("/pertsonak",async (req,res)=>{
    try {
        let body=req.body
        console.log("bodyy",body)
        let emaitza = await konprobatuFitxategiaSortutaDagoen();
        emaitza.push(req.body);
        await fs.writeFile(PATHFITXATEGI, JSON.stringify(emaitza));
        res.status(200).json({emaitza: "Dena ondo"})
    }catch(error){
        res.status(404).json({emaitza: "Gaizki sartu da zerbait"})
    }
})
app.put("/pertsonak",async(req,res)=>{
   try {
       let berri = req.body
       if (!Array.isArray(berri)) {
           return res.status(400).json({ emaitza: "Se esperaba un array de personas." });
       }

       await fs.writeFile(PATHFITXATEGI, JSON.stringify(berri))
       res.status(200).json({emaitza: "Dena ondo"})
   }catch (error){
       res.status(404).json({emaitza: "Gaizki sartu da zerbait"})
   }
})
app.patch("/pertsonak/:izena",async (req,res)=>{
    try {
        let izena = req.params.izena;
        let infoa= req.body;
        let bilatu= await konprobatuFitxategiaSortutaDagoen()
        bilatu=bilatu.filter(unekoa=>{
            return unekoa.izena!==izena;
        })
        if(!bilatu){
            bilatu=[]
        }
        bilatu.push(infoa);
        await fs.writeFile(PATHFITXATEGI,JSON.stringify(bilatu))
        res.status(200).json({emaitza: "Dena ondo"})
    }catch(error){
        res.status(404).json({emaitza: "Gaizki sartu da zerbait"})
    }
})




async function konprobatuFitxategiaSortutaDagoen(){
    try{
      let data =await fs.readFile(PATHFITXATEGI,'utf8');
      return JSON.parse(data);
    }catch (error){
        if(error.code==="ENOENT"){
            await fs.mkdir(PATHKARPETA,{recursive:true})
            await fs.writeFile(PATHFITXATEGI,"[]")
            return [];
        }else{
            console.log("Errorea irakurtzean")
            throw error;
        }
    }
}