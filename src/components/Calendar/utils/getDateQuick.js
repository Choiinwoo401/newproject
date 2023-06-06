export const months = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월'
];

export const getDateQuick = date => {
  const dateData = date.trim().split(' ');
  if (dateData.length > 3 || dateData.length < 2) return '';

  const day = dateData[0];
  const monthTmp = dateData[1].toLowerCase();
  let month = '';

  if (day < 1 || day > 31) return '';
  if (!months.find(m => m === monthTmp)) return '';

  let year = new Date().getFullYear();
  if (dateData.length === 3) {
    [, , year] = dateData;
  }
  if (year.toString().split('').length < 4) return '';

  for (let i = 0; i < months.length; i++) {
    if (months[i] === monthTmp) {
      month = i + 1;
      break;
    }
  }
  if (!months) return '';

  return `${year}-${month}-${day}`;
};
