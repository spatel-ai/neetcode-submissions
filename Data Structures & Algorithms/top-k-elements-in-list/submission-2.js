
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    pop() {

        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    peek() {
        return this.heap[0] ?? null;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][1] <= this.heap[index][1]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swap = null;

            if (leftChildIndex < length && this.heap[leftChildIndex][1] < element[1]) {
                swap = leftChildIndex;
            }
            if (
                rightChildIndex < length &&
                this.heap[rightChildIndex][1] < (swap === null ? element[1] : this.heap[leftChildIndex][1])
            ) {
                swap = rightChildIndex;
            }
            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }

    size() {
        return this.heap.length;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let minHeap = new MinHeap();
        let pairs = new Map();
        for (let num of nums) {
            if (!pairs.has(num)) {
                pairs.set(num, 0);
            }
            pairs.set(num, pairs.get(num) + 1);
        }

        for (let [num, freq] of pairs) {
            minHeap.push([num, freq]);
            if (minHeap.size() > k) {
                minHeap.pop();
            }
        }
        console.log(minHeap)
        let result = [];
        for (let i = 0; i < k; i++) {
            result.push(minHeap.pop()[0]);
        }
        return result;
    }
}
