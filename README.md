# Algorithm

常用算法 JS 实现，LeetCode 算法题

- [只出现一次的数字](https://github.com/moshang-xc/Algorithm/issues/1)
- [分割回文串](https://github.com/moshang-xc/Algorithm/issues/2)
- [移除链表元素](https://github.com/moshang-xc/Algorithm/issues/3)
- [打家劫舍](https://github.com/moshang-xc/Algorithm/issues/4)
- [快乐数](https://github.com/moshang-xc/Algorithm/issues/5)
- [移动零](https://github.com/moshang-xc/Algorithm/issues/6)
- [旋转数组](https://github.com/moshang-xc/Algorithm/issues/7)
- [计算质数](https://github.com/moshang-xc/Algorithm/issues/8)
- [同构字符串](https://github.com/moshang-xc/Algorithm/issues/9)
- [递增的三元子序列](https://github.com/moshang-xc/Algorithm/issues/10)
- [反转链表](https://github.com/moshang-xc/Algorithm/issues/11)
- [存在重复的元素](https://github.com/moshang-xc/Algorithm/issues/12)
- [存在重复的元素 II](https://github.com/moshang-xc/Algorithm/issues/13)
- [最小公倍数](https://github.com/moshang-xc/Algorithm/issues/14)
- [最大公约数](https://github.com/moshang-xc/Algorithm/issues/15)
- [最大数](https://github.com/moshang-xc/Algorithm/issues/16)
- [寻找峰值](https://github.com/moshang-xc/Algorithm/issues/17)
- [2 的幂](https://github.com/moshang-xc/Algorithm/issues/18)
- [爬楼梯](https://github.com/moshang-xc/Algorithm/issues/19)
- [x的平方根](https://github.com/moshang-xc/Algorithm/issues/20)
- [二叉搜索树的最近公共祖先](https://github.com/moshang-xc/Algorithm/issues/21)
- [丑数](https://github.com/moshang-xc/Algorithm/issues/22)
- [各位相加](https://github.com/moshang-xc/Algorithm/issues/23)
- [缺失的数字](https://github.com/moshang-xc/Algorithm/issues/24)
- [Nim游戏](https://github.com/moshang-xc/Algorithm/issues/25)
- [单词模式](https://github.com/moshang-xc/Algorithm/issues/26)
- [移动零](https://github.com/moshang-xc/Algorithm/issues/27)
- [区域和检索-数组不可变](https://github.com/moshang-xc/Algorithm/issues/28)
- [3 的幂](https://github.com/moshang-xc/Algorithm/issues/29)
- [4 的幂](https://github.com/moshang-xc/Algorithm/issues/30)
- [两个数组的交集|](https://github.com/moshang-xc/Algorithm/issues/31)
- [两个数组的交集||](https://github.com/moshang-xc/Algorithm/issues/32)
- [两整数之和](https://github.com/moshang-xc/Algorithm/issues/33)
- [猜数字大小](https://github.com/moshang-xc/Algorithm/issues/34)
- [赎金信(ransom)](https://github.com/moshang-xc/Algorithm/issues/35)
- [待续]()


## 位运算

### &（按位与）
两个都为真才为真
```js
1&1=1 , 1&0=0 , 0&1=0 , 0&0=0

3&5 = 1 <=> 011&101 = 001 
```

### &&（逻辑与）
左右两边的表达式为真则为真，且&&左边的表达式为真的情况下才计算右边的表达式

### |（按位或）
一个为真就为真
```js
1|0 = 1 , 1|1 = 1 , 0|0 = 0 , 0|1 = 1

6||2 = 6 <=> 0110||0010 = 0110
```
### ||（逻辑或）
两边的表达式有一个为真则为真，且&&左边的表达式为真的情况下不去计算右边的表达式

### ^（异或运算符）
同为假，异为真
```JS
1^0 = 1 , 1^1 = 0 , 0^1 = 1 , 0^0 = 0

5^9 = 12 <=> 0101^1001 = 1100
```

### >>（右移运算符） 
`5>>2`的意思为5的二进制位往右挪两位，正数左边补0，负数补1

```js
0101 >> 2 -> 0001 = 1 

-5>>2 
// -5的二进制表示 1111 1011
源码: 0000 0101
取反: 1111 1010
补码: 1111 1011 (补码=取反+1)
 
-5>>2: 1111 1110
-1 : 1111 1101
取反: 0000 0010  
-5>>2 = -2

-2 = 1111 1111
-2>>2: 1111 1111
-1 : 1111 1110
取反: 0000 0001  
-5>>2 = -1
```

### <<（左移运算符）
`5<<2`的意思为5的二进制位往左挪两位，右边补0
```js
0101 << 2 -> 010100 = 20 
```
### ~（取反运算符）
取反就是1为0,0为1
```js
~5 = -6 <=> 0000 0101 -> 1111 1010
```

## 排序算法

## 查找算法

### 顺序查找
顺序查找算是最简单的了，无论是有序的还是无序的都可以，也不需要排序，只需要一个个对比即可，但其实效率很低.
```js
function search(arr, value){
    for(let i = 0, l = arr.length - 1; i < l; i++){
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}

// 使用哨兵，免去每次的越界判断
function search(arr, value){
    let l = arr.length - 1;
    if(arr[l] === value){
        return l;
    }
    let i = 0;
    while(arr[i++] !== value);
    return i === l + 1 ? -1 : i-1;
}
```
### 二分查找
二分法查找适用于大的数据，但前提条件是数据必须是有序的，他的原理是先和中间的比较，如果等于就直接返回，如果小于就在前半部分继续使用二分法进行查找，如果大于则在后半部分继续使用二分法进行查找

```js
function binarySearch(arr, value){
    let start = 0,
        end = arr.length - 1;
    
    while(start <= end){
        // let mid = (start + end) >> 1; //数据可能会溢出
        let mid = start + ((end - start)>> 1);
        if(arr[mid] === value){
            return mid;
        } else if(arr[mid] > value){
            end = mid - 1;
        } else{
            start = mid + 1;
        }
    }

    return -1;
}

// 递归写法
function binarySearch(arr, value){
    let start = 0,
        end = arr.length - 1;
    
    return searchmy(arr, start, end, value);
}

function searchmy(arr, start, end, value){
    if(start > end){
        return -1;
    }
    let mid = start + ((end - start)>>1);
    if(arr[mid] === value){
        return mid;
    }else if(arr[mid] > value){
        return searchmy(arr, start, mid-1, value);
    }else {
        return searchmy(arr, mid+1, end, value);
    }
}
```
### 插值查找
插值查找与二分查找的区别是，我们比较值得位置不同，二分查找是与中间值进行比较，但是如果我们知道要查找的值大概在数组的最前面或最后面的时候使用二分法查找显然是不明智的，这时候可以选择插值查找。插值查找的时候我们比较的不是中间值，是`mid = start + (value - arr[start])/(arr[end] - arr[start])*(end - start)`。
```js
function insertSearch(arr, value){
    let start = 0,
        end  = arr.length - 1;

    while(start <= end){
         if (arr[end] == arr[start]) {
            if (arr[end] == value){
                return end;
            }
            else {
                return -1;
            }
        }

        let mid = start + Math.floor((value - arr[start])/(arr[end] - arr[start])*(end - start));
        if(arr[mid] === value){
            return mid;
        } else if(arr[mid] > value){
            end = mid - 1;
        } else{
            start = mid + 1;
        }
    }
    return -1;
}
```

### 斐波那契查找
使用场景