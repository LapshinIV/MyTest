var _ = require('underscore');

var input = {
    "seatmap": [
        { "seat": "10A" },
        { "seat": "10B" },
        { "seat": "10C" },
        { "aisle": "aisle" },
        { "seat": "10D"},
        { "seat": "10E"},
        { "seat": "10F"},
        { "aisle": "aisle" },
        { "seat": "10G"},
        { "seat": "10H"},
        { "seat": "10J"},
        { "seat": "11A" },
        { "seat": "11B" },
        { "seat": "11C" },
        { "aisle": "aisle" },
        { "seat": "11D"},
        { "seat": "11E"},
        { "seat": "11F"},
        { "aisle": "aisle" },
        { "seat": "11G"},
        { "seat": "11H"},
        { "seat": "11J"}
    ]
};



//var output = function(input) {
//
//    var noKey = _.pluck(input.seatmap, "seat");                                       // убираем ключ seat, что интересено объект aisle === undefined
//    var str = noKey.join('');                                                         // приводим всё к строке
//    var spl = str.split("");                                                          // Дробим строку по символу
//    var letters = _.without(spl, '0','1','2','3','4','5','6','7','8','9');            //Убираем все цифры
//    var uniqLet = _.uniq(letters);                                                    //оставляем уникальные буквы
//    var uniSpl = _.uniq(spl);                                                         //оставляем уникальные символы
//    var uniSplStr = uniSpl.join('');                                                  //приводим к строке
//    var short = uniSplStr.replace(/[^-0-9]/gim,'');                                   //убираем все буквы
//
//
//    if (uniqLet.length === 6) {
//        for (var a = 0; a < 1; a++) {
//            uniqLet.splice(3, 0, "  ");
//            console.log("  " + uniqLet.join(' '))
//        }
//
//        for (var b = 1; b <= short.length; b++) {
//            console.log(b + "|"+ new Array(4).join(" .") + "  " + new Array(4).join(" .") + "|")
//        }
//    }
//
//    if (uniqLet.length === 8) {
//        for (var a = 0; a < 1; a++) {
//            uniqLet.splice(2, 0, "  ");
//            uniqLet.splice(7, 0, "  ");
//            console.log("  " + uniqLet.join(' '))
//        }
//
//        for (var b = 1; b <= short.length; b++) {
//            console.log(b + "|"+ new Array(3).join(" .") + "  " + new Array(5).join(" .") + "  " + new Array(3).join(" .") + " |")
//        }
//    }
//
//    if (uniqLet.length === 9) {
//        for (var a = 0; a < 1; a++) {
//            uniqLet.splice(3, 0, "  ");
//            uniqLet.splice(7, 0, "  ");
//            console.log("  " + uniqLet.join(' '))
//        }
//
//        for (var b = 1; b <= short.length; b++) {
//            console.log(b + "|"+ new Array(4).join(" .") + "  " + new Array(4).join(" .") + "  " + new Array(4).join(" .") + "|")
//        }
//    }
//
//};
//
//output(input);
//

//=================================================================================================================================================================================

var keys=[];
var key;
for (var a = 0; a < input.seatmap.length; a++){
    key = _.values(input.seatmap[a]);
    keys[keys.length]= key
}
var arKey = _.flatten(keys);

var test1 = _.map(arKey, function(el){
    var noAis = [];
    if (el !== "aisle") {
        noAis.push(el)
    }else{
        noAis.push(" ")
    }
    return noAis;
});

var uniSplStr = test1.join('');
var letters = _.without(uniSplStr, '0','1','2','3','4','5','6','7','8','9');
//var uniqLet = letters.join('');
var fin = [];
fin.push(letters[0]);
for (var i=1; i<=letters.length; i++){
    if (letters[i] !== letters[0]){
        fin[fin.length]= letters[i]
    }else{
        break
    }
}
var finF = " "+ fin.join(' ');
console.log(finF);

var num = _.flatten(test1);
var numTest = [];
for (var b = 0; b<num.length; b++){
    if (num[b]){
        numTest[numTest.length] = (parseInt(num[b]));
    }
}
var numTest2 = _.uniq(_.compact(numTest));
console.log(numTest2);

//for (var c = 1; c <= numTest2.length; c++) {
//            console.log(c + "|"+ new Array(4).join(" .") + "  " + new Array(4).join(" .") + "  " + new Array(4).join(" .") + "|")
//        }
//    }