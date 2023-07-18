// =============================================
//           	     OICE
// =============================================
// O: 
    // MedianFinder: Nothing
    // addNum: Nothing
    // findMedian: Int representing median of nums in data struct/storage
// I: 
    // MedianFinder: Nothing
    // addNum: Int to add to MedianFinder data struct
    // findMedian: Nothing
// C: 
    // -105 <= num <= 105
    // There will be at least one element in the data structure before calling findMedian.
    // At most 5 * 104 calls will be made to addNum and findMedian.
// E: 

// =============================================
//             Clarifying Questions
// =============================================
// Time complexity target
// How to handle edge cases (return 0 or null? Throw error?)
    // non-int input type
    // storage is empty [] 

// =============================================
//               My Solution (broken)
// =============================================
// =============================================
//                  Pseudo:
// Negative numbers shouldn't cause an issue (??) Median calculation remains the same (sum of ints / 2, round for odd length)
// =============================================
// MedianFinder class needs storage for ints and a size or length to reference when calculating median
// addNum should add the input int to the MedianFinder class storage and increment its size/length

// findMedian should check if the storage has one or more ints stored. 
    // If input not num, return null
    // If empty, return null
    // If size 1, return 1
    // Else if size is an even number
        // median = (storage[(storage.length - 1) / 2] + storage[(storage.length - 1) / 2]) / 2
    // Else if size is an odd number
        // median = storage[Math.ceil(storage.length / 2)]

  var MedianFinder = function() {
    this.storage = [];
    this.size = 0;
};

/** 
  * @param {number} num
  * @return {void}
  */
MedianFinder.prototype.addNum = function(num) {

    if (typeof num !== 'number') {
        return null;
    } else {
        if (this.size > 0) {
            for (var i = 0; i < this.size; i++) {
                if (i === this.size - 1 && num > this.storage[this.size - 1]) {
                    this.storage.push(num);
                } else if (num <= this.storage[i + 1] && (i + 1 < this.size)) {
                    this.storage.splice(i, 0, num);
                } 
            }

        } else if (this.size === 0) {
            this.storage.push(num);
        }
        this.size += 1;
    }

};

/**
  * @return {number}
  */
MedianFinder.prototype.findMedian = function() {
    // console.log('median storage log', this.storage);

    if (this.size < 1) {
        return null;
    }

    let median;
    if (this.size === 1) {
        median = this.storage[0];
    } else {
        // Else if size is an even number
        if (this.size % 2 === 0) {
            median = (this.storage[(this.size / 2) - 1] + this.storage[(this.size) / 2]) / 2
        } else if (this.size % 2 !== 0) {
            // Else if size is an odd number
            median = this.storage[Math.floor(this.size / 2)]
        } else {
            console.log('there was a problem getting median');
        }
    }
    return median;
};

/** 
  * Your MedianFinder object will be instantiated and called as such:
  * var obj = new MedianFinder()
  * obj.addNum(num)
  * var param_2 = obj.findMedian()
  */

if (!module) {
  let module = {};
}

module.exports = MedianFinder;