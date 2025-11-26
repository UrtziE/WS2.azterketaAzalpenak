let informazioa=[];
let izenaff;
let adinaff;
let maskotaff;
let motaff;

function gertaerakKudeatu(){
     izenaff=document.getElementById("nombre");
     adinaff=document.getElementById("edad");
    maskotaff=document.getElementById("nombreMascota");
    motaff=document.getElementById("razaMascota");
let form= document.getElementById("mascotaForm");
let erakutsiBtn= document.getElementById("mostrarDatosBtn");
    let ezabatuDena= document.getElementById("ezabatuDena");
    form.addEventListener("submit",event=>{ //FORM-A BIDALTZEAN AKTIBATU
        gordePertsona();
    })

    erakutsiBtn.addEventListener("click",erakutsiGordetakoak)
    ezabatuDena.onclick=ezabatuDenak;
    let btn1= document.getElementById("igoZerbitzariraUnekoa");
    let btn2= document.getElementById("igoDenakZerbitzarira");
    let btn3= document.getElementById("aktualizatuBat");
    let btn4= document.getElementById("ErakutsiZerbitzarikoak");
    btn1.onclick=igoUnekoa;
    btn2.onclick=igoDenakZerbitzarira;
    btn3.onclick=aktualizatuBat;



    btn4.onclick=ErakutsiZerbitzarikoak;
}
function igoUnekoa() {
    let  izenaf=izenaff.value;
    let adinaf=adinaff.value; //VALUE DA, EZ GET VALUE, HORRELA BADAKIZU ZE JARRI DUTEN FORM-EAN
    let maskota=maskotaff.value;
    let mota=motaff.value;
    if(!maskota||!mota||!izenaf||!adinaf){
        alert("Bete dena puto pringao")
    }else {
        let info = {
            izena: izenaf,
            adina: adinaf,
            maskotaIzen: maskota,
            maskotaRaza: mota
        }
        let emaitza= fetch("http://localhost:3000/pertsonak",{method: 'POST', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)}).then(r=>r.json())
            .then(emaitza=> {console.log(emaitza.emaitza)
                ErakutsiZerbitzarikoak()})
            .catch(error=>{console.log(error.emaitza)})
    }
}
function igoDenakZerbitzarira() {
   let info= JSON.parse(localStorage.getItem("pertsonak"))||[];
    let emaitza= fetch("http://localhost:3000/pertsonak",{method: 'PUT', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(info)})
        .then(r=>r.json())
        .then(emaitza=> {console.log(emaitza.emaitza)
            ErakutsiZerbitzarikoak()})
        .catch(error=>{console.log(error.emaitza)})
}
function aktualizatuBat() {
    let  izenaf=izenaff.value;
    let adinaf=adinaff.value; //VALUE DA, EZ GET VALUE, HORRELA BADAKIZU ZE JARRI DUTEN FORM-EAN
    let maskota=maskotaff.value;
    let mota=motaff.value;
    if(!maskota||!mota||!izenaf||!adinaf){
        alert("Bete dena puto pringao")
    }else {
        let info = {
            izena: izenaf,
            adina: adinaf,
            maskotaIzen: maskota,
            maskotaRaza: mota
        }
        let emaitza= fetch(`http://localhost:3000/pertsonak/${izenaf}`,{method: 'PATCH', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)}).then(r=>r.json())
            .then(emaitza=> {ErakutsiZerbitzarikoak()
                console.log(emaitza.emaitza)})
            .catch(error=>{console.log(error.emaitza)})
    }
}
function ErakutsiZerbitzarikoak() {
    let emaitza= fetch("http://localhost:3000/pertsonak/").then(r=>r.json())
        .then(emaitza=> {
            localStorage.setItem("pertsonak",JSON.stringify(emaitza));
            erakutsiGordetakoak()
                            })
        .catch(error=>{console.log(error.emaitza)})
}
window.onload=gertaerakKudeatu
function gordePertsona(){
    let  izenaf=izenaff.value;
    let adinaf=adinaff.value; //VALUE DA, EZ GET VALUE, HORRELA BADAKIZU ZE JARRI DUTEN FORM-EAN
    let maskota=maskotaff.value;
    let mota=motaff.value;
    if(!maskota||!mota||!izenaf||!adinaf){
        alert("Bete dena puto pringao")
    }else{
        let info={
            izena:izenaf,
            adina:adinaf,
            maskotaIzen:maskota,
            maskotaRaza:mota
        }
        console.log(izenaf,adinaf,maskota,mota)
        informazioa=JSON.parse(localStorage.getItem("pertsonak")||"[]");
        informazioa.push(info)
        localStorage.setItem("pertsonak",JSON.stringify(informazioa));
        erakutsiGordetakoak()
    }

}
function erakutsiGordetakoak(){

    let div=document.getElementById("datosGuardados");
    div.innerHTML="";
    informazioa=JSON.parse(localStorage.getItem("pertsonak")||"[]");
    console.log(informazioa)
    informazioa.forEach(info=>{
        let li= document.createElement("li");
        li.textContent = `Izena: ${info.izena},\n Adina: ${info.adina},\n Maskota: ${info.maskotaIzen} (${info.maskotaRaza})`;
        div.appendChild(li)
    })
}
function ezabatuDenak(){
    let div=document.getElementById("datosGuardados");
    div.innerHTML="";
    informazioa=[];
    localStorage.setItem("pertsonak",JSON.stringify(informazioa))//GOGORATU, LOCAL STORAGEAN BAKARRIK STRING-ak GORDE. PROGRAMA HOnetan ere localStorage.clear() egin daiteke.
}