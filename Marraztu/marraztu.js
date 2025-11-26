


function marraztu(){

    let clear= document.getElementById("ezabatuDena");
    let karratua= document.getElementById("Karratua");
    let karratuHutsa= document.getElementById("karratuHutsa");
    let triangelua= document.getElementById("triangelua");
    let borobilErlAl=document.getElementById("borobilErlAl")
    let borobilErlKont=document.getElementById("borobilErlKont")
    let drawImages=document.getElementById("drawImages")
    karratua.addEventListener("click",KudeatukargatuKarratua);
    triangelua.onclick=KudeatukargatuTriangelua;
    karratuHutsa.onclick=KudeatukargatuKarratuHutsa;
    clear.onclick=KudeatugarbituDena;
    borobilErlAl.onclick=KudeatueginKurbaBatErlojuenNoranzkoan;
    borobilErlKont.onclick=KudeatueginKurbaBatErlojuenKontrann;
    drawImages.onclick=KudeatudrawMarrazkiBat;

}

window.onload=marraztu;
function KudeatukargatuKarratua(){
    let oihala= document.getElementById("oihala");
    let context= oihala.getContext("2d");
    kargatuKarratua(context)
}
function KudeatukargatuKarratuHutsa(){
    let oihala= document.getElementById("oihala");
    let context= oihala.getContext("2d");
    kargatuKarratuHutsa(context)
}
function KudeatukargatuTriangelua(){
    let oihala= document.getElementById("oihala");
    let context= oihala.getContext("2d");
    garbituDena(context)
    kargatuTriangelua(context)
}
function KudeatueginKurbaBatErlojuenNoranzkoan(){
    let oihala= document.getElementById("oihala");
    let context= oihala.getContext("2d");
    garbituDena(context)
    eginKurbaBatErlojuenNoranzkoan(context)
}
function KudeatueginKurbaBatErlojuenKontrann(){
    let oihala= document.getElementById("oihala");
    let context= oihala.getContext("2d");
    garbituDena(context)
    eginKurbaBatErlojuenKontrann(context)
}
function KudeatugarbituDena(){
    let oihala= document.getElementById("oihala");
    let context= oihala.getContext("2d");
    garbituDena(context)
}
function KudeatudrawMarrazkiBat(){
    let oihala= document.getElementById("oihala");
    let context= oihala.getContext("2d");
    drawMarrazkiBat(context);

}


function kargatuKarratua(context){
    context.fillRect(10 ,10,200,100)//sortu rektangulo bat hasten dena x=10 eta y=10 eta 200 luzera eta 400 altuerakoa
}
function kargatuKarratuHutsa(context){
    context.strokeStyle="red" //Oso garrantzitsua, honek beste guztiena aldatzen du.
                               //StrokeRect-en aurretik joan behar da, horrela funtzionatu egiten du, geroago joaten bada,
                                // berriz ere eman beharra zaio botoiari. GOGORATU STROKE ETA FILL-ek DENENA ALDATZEN DUTE.
    context.strokeRect(300 ,300,200,100)//sortu rektangulo bat hutsa hasten dena x=10 eta y=10 eta 200 luzera eta 400 altuerakoa

}
function kargatuTriangelua(context){
    context.beginPath()//Hasteko triangelua egiten
    context.moveTo(100, 100) //mugitu toki batera
    context.lineTo(200,200); //Lerro bat marrazteko moveTo-tik lineTo-ra
    context.lineTo(20,300)//berriz ere marraztu lerro bat
    context.closePath()//itxi triangelua
    context.lineWidth=6 //lerroaren zabaldura aierazteko.
    context.strokeStyle= "red" //lerroa gorriz margotzeko
    context.stroke()//Garrantzitsua, hau gabe ez da marraztuko lerrorik. LErrok marrazteko erabiltzen da.

    context.fillStyle="blue"; //kolore batekin pintatu
    context.fill(); //Pintatzeko bestela ez da aldatzen
}
function garbituDena(context){
context.clearRect(0,0,600,600)//0,0tik hasita, 600,600-era dena borratu.
}
function eginKurbaBatErlojuenNoranzkoan(context){

context.arc(200,200, 50,0, 1.5*Math.PI,false)
    //Sortu arku bat 400,400 posizioan, 50-eko radioa duena, 0 angeluan hasi eta 1,5Pi-ra doana, erlojuaren aldeko noranzkoan
    context.stroke(); //Stroke egin marrazteko, garrantzitsua
}
function eginKurbaBatErlojuenKontrann(context){
    context.strokeStyle="purple"
    context.arc(400,400, 50,0, 1.5*Math.PI,true)
    context.stroke();
    //Sortu arku bat 400,400 posizioan, 50-eko radioa duena, 0 angeluan hasi eta 1,5Pi-ra doana, erlojuaren kontrako noranzkoan
}

function drawMarrazkiBat(context){
    let marrazkia= new Image()
    marrazkia.src= "images.jpg"
    marrazkia.onload = function() { //jarri behar, draw-ek behar duelako marrazkia kargatuta egotea
        context.drawImage(marrazkia, 10, 10) //gure marrazkia canvas-ean non hasiko den, ezkerreko ejeak
        context.drawImage(marrazkia, 10, 300, 50, 160) //canvasean non jarri, zein tamainean
        context.drawImage(marrazkia, 0, 0, 100, 100, 10, 500, 500, 100)
        //zer marrazki, non hasi mozten, nora moztu, canvasean non jarri, zein tamainatan
    }
}
function drawMarrazkiBatResize(context){
    let marrazkia= new Image()
    marrazkia.src= "images.jpg"

    context.drawImage(marrazkia,10,300,50,160) //gure marrazkia canvas-ean non hasiko den, ezkerreko ejeak eta marrazkiaren luzera eta zabalera EZ DA MOZTEN
}
function drawMarrazkiBatMoztuta(context){
    let marrazkia= new Image()
    marrazkia.src= "images.jpg"
    context.drawImage(marrazkia,10,500,30,50,0,0,160,160) //gure marrazkia canvas-ean non hasiko den, ezkerreko ejeak eta marrazkiaren luzera eta zabalera EZ DA MOZTEN
    //marrazkia non kokatuCanvasean, ze tamainan egin resize eta nondik nora moztu marrazki originala.
}

