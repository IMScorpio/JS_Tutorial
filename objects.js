const bands ={
    vocals : 'Yash',
    guitar: 'yaswanth',
    drums: 'ram'
}
function sings({vocals}){
    return `${vocals} sings!`
}
for(let job in bands) {
    console.log(`on ${job}, its band ${bands[job]}!`);
    
}
console.log(sings(bands));


