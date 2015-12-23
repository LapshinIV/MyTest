var _ = require('underscore');

var input =
{
    "seatmap": [
    { "seat": "1A" },
    { "seat": "1B" },
    { "aisle": "aisle" },
    { "seat": "1C" },
    { "seat": "1D"},
    { "seat": "1E"},
    { "seat": "1F"},
    { "aisle": "aisle" },
    { "seat": "1G" },
    { "seat": "1H" },
    { "seat": "2A" },
    { "seat": "2B" },
    { "aisle": "aisle" },
    { "seat": "2C" },
    { "seat": "2D"},
    { "seat": "2E"},
    { "seat": "2F"},
    { "aisle": "aisle" },
    { "seat": "2G" },
    { "seat": "2H" },
    { "seat": "3A" },
    { "seat": "3B" },
    { "aisle": "aisle" },
    { "seat": "3C" },
    { "seat": "3D"},
    { "seat": "3E"},
    { "seat": "3F"},
    { "aisle": "aisle" },
    { "seat": "3G" },
    { "seat": "3H" },
    { "seat": "5A" },
    { "seat": "5B" },
    { "aisle": "aisle" },
    { "seat": "5C" },
    { "seat": "5D"},
    { "seat": "5E"},
    { "seat": "5F"},
    { "aisle": "aisle" },
    { "seat": "5G" },
    { "seat": "5H" }
]
};

var output = function(input) {

    var val = [];
    for (var a = 0; a < input.seatmap.length; a++) {                                 //Эта функция перебором берёт все значения объектов в коллекции и копирует в новый массив в виде подмассивов
        val[val.length] = _.values(input.seatmap[a]);
    }
    var oneArr = _.flatten(val);                                                    //объединяем все подмассивы в 1 массив

    var noAisle = _.map(oneArr, function (el) {                                     //Эта функция возвращает массив в котором заменены все значения aisle на пустую строку
        var noAis = [];
        if (el !== "aisle") {
            noAis.push(el)
        } else {
            noAis.push(" ")
        }
        return noAis;
    });

    var noAisStr = noAisle.join('');                                               //Приводим массив к строке
    var letters = _.without(noAisStr, '0','1','2','3','4','5','6','7','8','9');    //убираем все цифры

    var fin = [];                                                                  //тут в пустой массив заранее ложим 0-ой элемент строки
    fin.push(letters[0]);                                                          //затем перебором сравниваем i-ый(1++) элемент letters с его же 0-ым элементом
    for (var i = 1; i <= letters.length; i++) {                                    //и складываем все не равные значения в новый массив
        if (letters[i] !== letters[0]) {
            fin[fin.length] = letters[i]
        } else {
            break
        }
    }
    var finStr = fin.join('');                                                        //Приводим к строке

    var num = _.flatten(noAisle);                                                     //объединяем все подмассивы в 1 массив

    var numAll = [];
    for (var a = 0; a < num.length; a++) {                                            //тут перебором оставляем цифры удаляя все буквенные элементы
        if (num[a]) {
            numAll[numAll.length] = (parseInt(num[a]));
        }
    }
    var numUniq = _.uniq(_.compact(numAll));                                        //оставляем только уникальные значения и удаляем все ложные

    var dotStr = [];
    for (var b = 0; b < finStr.length; b++) {                                         //тут на основании колличества мест в ряду перебором добавляем колличество точек
        if (finStr[b] !== ' ') {                                                      //если это не место а проход, оставляем пробел
            dotStr.push('.')
        } else {
            dotStr.push(" ")
        }
    }

    var seatAll=[];                                                                   //собираем ряды с посадочными местами(точки) в соответствии с их колличеством
    for (var c = 0; c < numUniq.length; c++) {
        var dot = numUniq[c] + "|" + dotStr.join('') + "|";
        seatAll[seatAll.length]=dot
    }
    for (var d=0; d < dot.length; d++){                                               //тут выравниваем букву по позиции первой точки
        if (dot[d]=== '.'){
            var l = dot.indexOf('.');
            break;
        }
    }
    console.log(new Array(l+1).join(" ") + fin.join(''));
    console.log(seatAll.join('\n'))
};


output(input);













//==========================================================================================================================================================================================
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
