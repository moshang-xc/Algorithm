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