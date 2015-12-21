var _ = require('underscore');

var output = function(input) {

    var noKey = _.pluck(input.seatmap, "seat");                             // убираем ключ seat, что интересено объект aisle === undefined
    var str = noKey.join('');                                               // приводим всё к строке
    var spl = str.split("");                                                // Дробим строку по символу
    var letters = _.without(spl, '0','1','2','3','4','5','6','7','8','9');   //Убираем все цифры
    var uniqLet = _.uniq(letters);                                          //оставляем уникальные буквы
    //console.log(letters);
    var pos = noKey;

    for(var a = 0; a <= noKey.length; a++){
        if(noKey[a] === undefined){
            pos.push('HI');
        }
    }
    console.log(pos);
    //for (var a = 0; a < 1; a++) {
    //    console.log("  " + letter.join(' '))
    //}
//
//    for (var b = 0; b < num.length; b++) {
//        console.log(num[b] + "|" + new Array(4).join(" .") + "   " + new Array(4).join(" .") + "|")
//    }
//};
//
};
output(input =
{
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
});