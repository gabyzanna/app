import { setInner, addInner } from "https://jscroot.github.io/element/croot.js";
import {get} from "https://jscroot.github.io/api/croot.js"; 
import { rowtabel } from "../template/tabel.js";
import { URL } from "../config/url.js";
setInner("namadivisi","Data Mahasiswa");
get(URL, tabelContent);

function tabelContent(result){
    userTable(result);
}

function userTable(jsonParse){

    jsonParse.forEach((element, index) => {
    let row = rowtabel.replace("#namamhs#", element.namamhs).
    replace("#kelas#", element.kelas).
    replace("#prodi#", element.prodi);
    console.log(element._id);
    addInner("demo",row);
    });
}