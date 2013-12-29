if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    },

    sum : function(arr) {
        var sum = 0;
        for (var i = arr.length - 1; i >= 0; i--) {
            if (typeof arr[i] === 'number') {
                sum = sum + arr[i];
            }
        }
        return sum;
    },

    remove : function(arr, item) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === item) {
                arr.splice(i, 1);
            }
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === item) {
                arr.splice(i, 1);
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        for (var i = arr1.length - 1; i >= 0; i--) {
            arr2.unshift(arr1[i]);
        }
        return arr2;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var sum = 0;
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === item) {
                sum = sum + arr[i];
            }
        }
        return sum;
    },

    duplicates : function(arr) {
        var dupes = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            if ((dupes.indexOf(arr[i]) === -1) &&
                (arr.indexOf(arr[i], arr.indexOf(arr[i]) + 1) > -1)) {
                dupes.push(arr[i]);
            }
        }
        return dupes;
    },

    square : function(arr) {
        var squares = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            squares.unshift(arr[i] * arr[i]);
        }
        return squares;
    },

    findAllOccurrences : function(arr, target) {
        var idxs = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === target) {
                idxs.unshift(i);
            }
        }
        return idxs;
    }
  };
});
