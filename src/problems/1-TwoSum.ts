//Naive
function twoSumNaive(nums: number[], target: number): number[] | undefined {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                if (nums[i] + nums[j] === target) return [i, j];
            }
        }
    }
}

// Optimal
function twoSum(nums: number[], target: number): number[] | undefined {
    // [number, index]
    let dict: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i],
            m = target - n;
        if (m in dict) return [i, dict[m]];
        dict[n] = i;
    }
}

console.log(twoSum([2, 7, 11, 15], 9));
