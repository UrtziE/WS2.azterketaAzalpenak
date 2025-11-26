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