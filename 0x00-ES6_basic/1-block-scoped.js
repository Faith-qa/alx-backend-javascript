export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /* eslint-disable-next-line */
    const task = true;
    const task2 = false;
    /* eslint-disabled-next-line */
  }

  return [task, task2];
}
