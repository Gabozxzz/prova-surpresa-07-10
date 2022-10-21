function Juros(capital,preço,taxa,tempo){
    let sla= capital-preço
    let montane=((1+(taxa/100))**tempo)*sla
    let juros= montane-sla
    let parcela=montane/(tempo*12)
    
}
console.log(Juros(100000,20000,10,10))