## 排序

#### 冒泡排序
冒泡排序就是重复“从序列右边开始比较相邻两个数字的大小，再根据结果交换两个数字 的位置”这一操作的算法。在这个过程中，数字会像泡泡一样，慢慢从右往左“浮”到序列的顶端，所以这个算法才被称为“冒泡排序”。
- 时间复杂度O(n²)

#### 选择排序
选择排序就是重复“从待排序的数据中寻找最小值，将其与序列最左边的数字进行交换” 这一操作的算法。在序列中寻找最小值时使用的是线性查找。
- 时间复杂度O(n²)

#### 插入排序
插入排序是一种从序列左端开始依次对数据进行排序的算法。在排序过程中，左侧的数据 陆续归位，而右侧留下的就是还未被排序的数据。插入排序的思路就是从右侧的未排序区域内 取出一个数据，然后将它插入到已排序区域内合适的位置上。
- 时间复杂度O(n²)

#### 堆排序
- 时间复杂度O(logn)

#### 归并排序
比较子序，然后合并
- 时间复杂度O(logn)

#### 快速排序
随机找一个基准值，小于基准值的值放左边，大于基准值的值放右边
- 时间复杂度O(nlogn)
