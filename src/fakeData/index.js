import fakeData from "./FakeData.json";

const fakeDataItem = [...fakeData];

const shuffle = (a) => {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
};

shuffle(fakeDataItem);

export default fakeDataItem;
