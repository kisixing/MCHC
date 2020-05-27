/**
 * 根据末次月经计算预产期日期、预产期B超
 */
export function getExpected(date: string) {
  const mile = new Date(date).getTime();
  const addMile = mile + 280 * 24 * 60 * 60 * 1000;
  const tmpDate = new Date(addMile);
  const newY = tmpDate.getFullYear();
  let newM: any = tmpDate.getMonth() + 1;
  if (newM < 10) {
      newM = `0${newM}`;
  }
  let newD: any = tmpDate.getDate();
  if (newD < 10) {
      newD = `0${newD}`;
  }
  const newdate = `${newY}-${newM}-${newD}`;
  return newdate
};
