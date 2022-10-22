function sot(str){

    str=str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');

    return str.split("").sort().join("");

}console.log(sot("web master"));