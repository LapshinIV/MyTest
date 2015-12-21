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


var output = function(input) {

    var noKey = _.pluck(input.seatmap, "seat");                             // убираем ключ seat, что интересено объект aisle === undefined
    var str = noKey.join('');                                               // приводим всё к строке
    var spl = str.split("");                                                // Дробим строку по символу
    var letters = _.without(spl, '0','1','2','3','4','5','6','7','8','9');  //Убираем все цифры
    var uniqLet = _.uniq(letters);                                          //оставляем уникальные буквы
    var uniSpl = _.uniq(spl);                                               //оставляем уникальные символы
    var uniSplStr = uniSpl.join('');                                        //приводим к строке
    var short = uniSplStr.replace(/[^-0-9]/gim,'');                         //убираем все буквы


    if (uniqLet.length === 6) {
        for (var a = 0; a < 1; a++) {
            uniqLet.splice(3, 0, "  ");
            console.log("  " + uniqLet.join(' '))
        }

        for (var b = 1; b <= short.length; b++) {
            console.log(b + "|"+ new Array(4).join(" .") + "  " + new Array(4).join(" .") + "|")
        }
    }

    if (uniqLet.length === 8) {
        for (var a = 0; a < 1; a++) {
            uniqLet.splice(2, 0, "  ");
            uniqLet.splice(7, 0, "  ");
            console.log("  " + uniqLet.join(' '))
        }

        for (var b = 1; b <= short.length; b++) {
            console.log(b + "|"+ new Array(3).join(" .") + "  " + new Array(5).join(" .") + "  " + new Array(3).join(" .") + " |")
        }
    }

    if (uniqLet.length === 9) {
        for (var a = 0; a < 1; a++) {
            uniqLet.splice(3, 0, "  ");
            uniqLet.splice(7, 0, "  ");
            console.log("  " + uniqLet.join(' '))
        }

        for (var b = 1; b <= short.length; b++) {
            console.log(b + "|"+ new Array(4).join(" .") + "  " + new Array(4).join(" .") + "  " + new Array(4).join(" .") + "|")
        }
    }

};

output(input);