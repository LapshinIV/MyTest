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
    ]
};


console.log(
_.foldl(
    test.seatmap,
        function(acc, value, index, collection){
            if(parseInt(_.initial(value).join('')) === parseInt(_.initial(collection[index-1]).join('')) || value === 'aisle' || parseInt(_.initial(value).join('')) === parseInt(_.initial(collection[index-2]).join(''))){
                return _.initial(acc).concat([_.last(acc).concat(value)]);
            }else{
                return acc.concat([[value]])
            }
        },
     []
)
);

