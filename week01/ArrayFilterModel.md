# 数组相关算法之过滤器模型

* 适用类型：用来解决需要保序的数组操作类问题
* 中心思想：操作流程为遍历数组，满足条件的留下
* 思维拓展：正序，倒序，多个条件
* 模版语法：

```javascript
for(let i = 0;i < array.length;i++){
  if(条件为真){
    留下当前数据
  }
}
```

## 相关题目
### [LeetCode 26.删除有序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

* 题目给定的是有序数组，判断是不是重复只需要确定当前元素和前一个元素是否相同即可
* 要求原地修改并且不需要考虑超出新长度后面的元素，可以使用一个变量count存储当前不重复的元素个数，将不重复的元素依次排列
* 最后要求返回新长度，只需要返回count即可
* 时间复杂度为O(n)，空间复杂度为O(1)，

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  	let count = 0;
    for(let i = 0; i < nums.length; i++){
      if(i === 0 || nums[i] !== nums[i-1]){
        nums[count] = nums[i];
        count++;
      }
    }
  	return count
};
```

### [LeetCode 283.移动零](https://leetcode-cn.com/problems/move-zeroes/)

* 采用过滤器模型，条件就是为0我们不要，不为0我们就要
* 第一遍遍历完成后，数组剩余空间进行补0操作即可。
* 时间复杂度为O(n)，空间复杂度为O(1)

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[count] = nums[i];
            count++;
        }
    }
    while (nums[count] !== undefined) {
        nums[count] = 0;
        count++;
    }
};
```

### [LeetCode 66.加一](https://leetcode-cn.com/problems/plus-one/)

* 如果最后一位为9，则需要往前进一位，所以使用倒序遍历更好做
* 判断当前位数是否为9，不为9则直接返回数组。
* 如果循环没有被中断，则说明当前数组一直有进位，需要补1

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for(let i = digits.length - 1;i >= 0;i--){
    if(digits[i] < 9){
      digits[i]++;
      return digits;
    } else{
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};
```


### [LeetCode 88.合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)

* 数组均为升序数组，且nums1后n个元素为0，可发挥空间大。
* 倒序比较两个数组，大值放入对应位置
* 思考边界情况

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let j = m - 1;
    let k = n - 1;
    for (let i = m + n - 1; i >= 0; i--) {
        if (k < 0 || nums1[j] > nums2[k]) {
            nums1[i] = nums1[j];
            j--;
        } else { 
            nums1[i] = nums2[k];
            k--
        }
    }
    return nums1;
};
```



