function contagem(){
    var ini= document.getElementById("inicio")
    var fin= document.getElementById("fim")
    var pass= document.getElementById("passo")
    var contador= document.getElementById("caixa2")
  

    if(ini.value.length == 0||fin.value.length==0||pass.value.length==0){
        window.alert("[Erro] insira os valores")
    }
    else{
        contador.innerHTML="Contando "
        var fn = Number(fin.value)
        var pas = Number(pass.value)
        var inic= Number(ini.value)
        var c=inic

        while(c<=fn){
            contador.innerHTML+=`${c} \u{1F449} `
            c=c+pas
        }
        contador.innerHTML+=`\u{1F9E0}`
    }
}
