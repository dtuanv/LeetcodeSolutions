// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


let nums = [2, 7, 11, 15]
let target = 9
function twoSum(nums, target) {

    let mapN = new Map()
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let rest = target - nums[i]
        if (mapN.has(rest)) {
            result.push(mapN.get(rest))
            result.push(i)
            console.log("result ",result)
            return result
        }
        mapN.set(nums[i], i)
    }
};

twoSum(nums, target)