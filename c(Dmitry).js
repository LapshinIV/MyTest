var _ = require('lodash');

var seatmap = [
		// {"seat": "1A", "geometry": {
    //   "position": { "x": , "y": },
    //   "size": { "width": "20px", "depth": "20px" }
    // }}, {"seat": "1C"}, {"aisle": "aisle"}, {"seat": "1D"}, {"seat": "1F"},
	  // {"seat": "2A"}, {"seat": "2C"}, {"aisle": "aisle"}, {"seat": "2D"}, {"seat": "2F"}
//	   	{"seat": "1A", "status": "empty / occupied"}, {"seat": "1C"}, {"aisle": "aisle"}, {"seat": "1D"}, {"seat": "1F"}
		"2A", "2C", "aisle", "2D", "2F",
		"3A", "3C", "aisle", "3D", "3F",
		"4A", "4B", "4C", "aisle", "4D", "4E", "4F",
		"5A", "5B", "5C", "aisle", "5D", "5E", "5F",
		"6A", "6B", "6C", "aisle", "6D", "6E", "6F",
//		"13B", "13C", "aisle", "13D", "13E",
//		"14A", "14B", "14C", "aisle", "14D", "14E", "14F",
//		"15A", "15B", "15C", "aisle", "15D", "15E", "15F",
//		"16A", "16B", "16C", "aisle", "16D", "16E", "16F",
  ];

// console.log(
function seatmap2ascii (seatmap) {
	_.reduce(
		_.reduce(
			/*collection*/seatmap,
			/*iteratee*/function(a, v /*{"seat": "1A"} or {"aisle": "aisle"}*/, i, c) {
        // "1A" => "1"
        // "10A" => "10"
				function seat2rowNumber(seat) { return parseInt(_.initial(seat).join('')) }
        // "10A", "10B" => false
        // "13F", "14a" => true
				function isDifferentRow (seatA, seatB) { return seat2rowNumber(seatA) !== seat2rowNumber(seatB)}
        // collection "1A", "1C", "aisle", "1D", "1F"; pointer 3 (1D) => 1 (1C)
        // collection "1A", "1C", "aisle", "aisle", "1D", "1F"; pointer 4 (1D) => 1 (1C)
				function seatIndexLeftward(collection, pointer) {
					return _.findLastIndex(_.dropRight(collection, collection.length-pointer), function(j/*"1A"*/) {
						return isSeat(j)
					})
				}
        // accumulator [ {row: 1, seatmap: [1A,1C,aisle,1D,1F] } ] ; seat 2A
        // => [ {row: 1, seatmap: [1A,1C,aisle,1D,1F] }, {row: 2, seatmap: [2A]} ]
        function addNewRow(accumulator, seat/*"1A"*/) {
          return accumulator.concat({"row": seat2rowNumber(seat), "seatmap": [seat]});
        }
        // WARNING! Not pure function! Mutates accumulator
        //
        // accumulator [ {row: 1, seatmap: [1A,1C,aisle,1D,1F] }, {row: 2, seatmap: [2A]} ] ; seat "2B"
        // => [ {row: 1, seatmap: [1A,1C,aisle,1D,1F] }, {row: 2, seatmap: [2A, 2B]} ]
        //
        // accumulator [ {row: 1, seatmap: [1A,1C,aisle,1D,1F] }, {row: 2, seatmap: [2A]} ] ; seat "aisle"
        // => [ {row: 1, seatmap: [1A,1C,aisle,1D,1F] }, {row: 2, seatmap: [2A, aisle]} ]
        function addSeatToCurrentRow(accumulator, seat/*"1A"*/) {
          _.last(accumulator).seatmap.push(seat)
					return accumulator
        }
        // 1A => true
        // aisle => false
        function isSeat(seat/*"1A"*/) {
          return seat !== "aisle";
        }
        // 1A => false
        // aisle => true
        function isAisle(seat/*"aisle"*/) {
          return !isSeat(seat);
        }

        if (i === 0) {
          // console.log(i, 'a');
          // no rows yet
          return addNewRow(a, v/*1A*/);
        }
        if (isAisle(v)) {
          // current is aisle
          // console.log(i, 'b');
          return addSeatToCurrentRow(a, v/*1A*/);
        } else {
          // current is seat
          if (isDifferentRow(v, c[seatIndexLeftward(c, i)])) {
            // console.log(i, 'c');
            // row changed
            return addNewRow(a, v);
          } else {
            // console.log(i, 'd');
            // still same row
            return addSeatToCurrentRow(a, v/*1A*/);
          }
        }
			},
			/*accumulator*/[]
		),
		/*iteratee*/function(a, v, i, c){
      // 1A => true
      // aisle => false
      function isSeat(seat/*"1A"*/) {
        return seat !== "aisle";
      }
      // 1A => false
      // aisle => true
      function isAisle(seat/*"aisle"*/) {
        return !isSeat(seat);
      }
			function rowToString (row) {
				return indent() + row.row + " |" +
					_.reduce(row.seatmap, function(acc, v){
						return acc + (isAisle(v) ? " *" : " ." )
				},
				"") + " |\n"
			}
			return a + rowToString(v);
		},
		/*accumulator*/"")
// );
}
