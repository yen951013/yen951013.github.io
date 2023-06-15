export async function sleepWithPause(ms) {
    await sleep(ms);
    while (config.isPaused) {
        await sleep(100);
    }
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}