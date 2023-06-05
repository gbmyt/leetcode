/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = [];
    let result = false;

    for (var i = 0; i < nums.length; i++) {
        if (obj.includes(nums[i])) {
            result = true;
        } else {
            obj.push(nums[i]);
        }
    }

    return result;
};

// Export Logic 
if (!module) {
  module = {};
}
module.exports = containsDuplicate;