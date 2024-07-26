export const updateLetterMessage = (list, updater, index, message) => {
  const temp = { ...list[index] };
  temp.message = message;

  let newList = [];
  for (let i = 0; i < list.length; i++) {
    if (i === index) list = [...list, temp];
    else list = [...list, list[index]];
  }

  updater(newList);
};
