var _ = require('lodash');

var test =
{
    "seatmap": [
        "1A", "1C", "aisle", "1D", "1F",
        "2A", "2C", "aisle", "2D", "2F",
        "3A", "3C", "aisle", "3D", "3F",
        "4A", "4B", "4C", "aisle", "4D", "4E", "4F",
        "5A", "5B", "5C", "aisle", "5D", "5E", "5F",
        "6A", "6B", "6C", "aisle", "6D", "6E", "6F",
        "13B", "13C", "aisle", "13D", "13E",
        "14A", "14B", "14C", "aisle", "14D", "14E", "14F",
        "15A", "15B", "15C", "aisle", "15D", "15E", "15F",
        "16A", "16B", "16C", "aisle", "16D", "16E", "16F",
        "17A", "aisle", "17E", "17F", "17G", "aisle", "17H"
    ]
};

console.log(
    _.reduce(
        _.reduce(
            test.seatmap,
            function(acc, value, index, collection){
                function getRowNumber (value) {return parseInt(_.initial(value).join(''))}
                function isDifferentRow (seat1, seat2) {return getRowNumber(seat1) !== getRowNumber(seat2)}
                if(value === 'aisle' || !isDifferentRow(value, collection[index-1]) || !isDifferentRow(value, collection[index-2])){
                    _.last(acc).seatMap.push(value);
                    return acc
                }else{
                    return acc.concat({"row": getRowNumber(value), "seatMap": [value]});
                    //return acc.concat([[value]])
                }
            },
            []
        ),
            function(a, i){
                function rowToString(row) { return row.row + " |" + _.reduce(row.seatMap, function(acc, value){return acc +(value === "aisle"? ' *': ' .')}, "")+ " |\n"}
                return a + rowToString(i);
            },
    "")
);