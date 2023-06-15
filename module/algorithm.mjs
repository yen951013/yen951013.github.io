import { sleepWithPause } from './sleep.mjs';
import { compare } from './animation.mjs';
import { swap } from './animation.mjs';
import { complete } from './animation.mjs';

export var sortMethod = [
    bubble_sort,   // 0
    insertion_sort,
    selection_sort
];

export async function bubble_sort() {
    let n = config.nums.length;

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < (n - i - 1); ++j) {
            await sleepWithPause(config.delay);
            if (config.isAborted == true) { return; }
            
            if (compare(j, j + 1)) {
                swap(j, j + 1);
            }
        }
        complete(n - i - 1);
    }
}

export async function insertion_sort() {
    let n = config.nums.length;

    for (let i = 1; i < n; i++) {
        let target = i;
        for (let j = i - 1; j >= 0; j--) {
            await sleepWithPause(config.delay);
            if (config.isAborted == true) { return; }

            if (compare(j, target)) {
                swap(j, target);
                target = j;
            } else {
                break;
            }
        }
    }
}

export async function selection_sort() {
    let n = config.nums.length;

    for (let i =  0; i < n; i++) {
		let lowest = i;
		for  (let j = i + 1; j < n; j++) {
            await sleepWithPause(config.delay);
            if (config.isAborted == true) { return; }

			if (compare(lowest, j)) {
				lowest = j;
			}
		}
        await sleepWithPause(config.delay);

		if (lowest != i) {
			swap(lowest, i);
		}
        complete(i);
	}
}