
const listData = [
  {
    jackpot: '10,000,000',
    drawTime: '2023-12-12',
    logo: 'image.png',
    lotteryName: 'Power',
    links: 'https://example.com/lottery1',
    result: {
      dateTime: '2023-07-01 8:00 PM',
      numbers: [1, 2, 3, 4, 5],
      link: 'https://google.com/',
    },
  },
  {
    jackpot: '20,000,000',
    drawTime: '2023-12-12',
    logo: 'image.svg',
    lotteryName: 'Ball',
    links: 'https://example.com/lottery1',
    result: {
      dateTime: '2023-07-01 8:00 PM',
      numbers: [1, 4, 5, 6, 5],
      link: 'https://google.com/',
    },
  },
  {
    jackpot: '10,000,000',
    drawTime: '2024-10-31',
    logo: 'image.png',
    lotteryName: 'Lottery Name',
    links: 'https://example.com/lottery1',
    result: {
      dateTime: '2023-07-01 8:00 PM',
      numbers: [1, 2, 3, 4, 5],
      link: 'https://google.com/',
    },
  },
  {
    jackpot: '20,000,000',
    drawTime: '2023-8-28',
    logo: 'image.svg',
    lotteryName: 'Lottery Name Y',
    links: 'https://example.com/lottery1',
    result: {
      dateTime: '2023-07-01 8:00 PM',
      numbers: [1, 4, 5, 6, 5],
      link: 'https://google.com/',
    },
  },
  {
    jackpot: '10,000,001',
    drawTime: '2023-12-28',
    logo: 'image.png',
    lotteryName: 'Power Y',
    links: 'https://example.com/lottery1',
    result: {
      dateTime: '2023-07-01 8:00 PM',
      numbers: [1, 2, 3, 4, 5],
      link: 'https://google.com/',
    },
  },
  {
    jackpot: '20,000,002',
    drawTime: '2023-12-28',
    logo: 'image.svg',
    lotteryName: 'Ball Y',
    links: 'https://example.com/lottery1',
    result: {
      dateTime: '2023-07-01 8:00 PM',
      numbers: [1, 4, 5, 6, 5],
      link: 'https://google.com/',
    },
  },
  {
    jackpot: '10,000,003',
    drawTime: '2024-10-28',
    logo: 'image.png',
    lotteryName: 'Lottery Name Y',
    links: 'https://example.com/lottery1',
    result: {
      dateTime: '2023-07-01 8:00 PM',
      numbers: [1, 2, 3, 4, 5],
      link: 'https://google.com/',
    },
  },
  {
    jackpot: '20,000,004',
    drawTime: '2023-8-31',
    logo: 'image.svg',
    lotteryName: 'Lottery Name Y',
    links: 'https://example.com/lottery1',
    result: {
      dateTime: '2023-07-01 8:00 PM',
      numbers: [1, 4, 5, 6, 5],
      link: 'https://google.com/',
    },
  },
]


module.exports = {
  query,
}

async function query(query) {
  const { page } = query
  const pageSize = 4; // Number of items per page
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = listData.slice(startIndex, endIndex);
  try {
    if(page * pageSize > listData.length+1){
      return 
    }
    return paginatedData
  } catch (err) {
    console.log('ERROR: cannot find list')
    throw err;
  }
}
