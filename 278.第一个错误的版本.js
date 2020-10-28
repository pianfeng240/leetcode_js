/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * 题目要求不存在找不到的情况，
 * 采用二分查找，寻找左边界的简化版本
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;

        while(left < right) {
            const mid = left + parseInt((right - left) / 2);
            
            if (isBadVersion(mid) === true) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
};
// @lc code=end

