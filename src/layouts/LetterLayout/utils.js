export const updateLetterMessage = (list, updater, index, message) => {
  const temp = { ...list[index] };
  temp.message = message;
  temp.acted = true;

  let newList = [];
  for (let i = 0; i < list.length; i++) {
    if (i === index) newList = [...newList, temp];
    else newList = [...newList, list[i]];
  }

  updater(newList);
};
