const titles = [
  'Account',
  'Portfolio',
  'Watchlist',
  'Currencies',
  'Particulars',
  'Performance',
  'Mortgage',
  'Equities',
  'Funds',
  'Bonds',
  'Structured Products',
  'Others',
  'Portfolio',
  'Insurance'
];

export const getRandomTitle = () =>
  titles[Math.floor(Math.random() * titles.length)];
