
const listData = [
    {
      jackpot: '10,000,000',
      drawTime: '8:00 PM',
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
      drawTime: '8:00 PM',
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
      drawTime: '8:00 PM',
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
      drawTime: '8:00 PM',
      logo: 'image.svg',
      lotteryName: 'Lottery Name',
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

async function query() {
    try {
        console.log('listData',listData)
        return listData
    } catch (err) {
        console.log('ERROR: cannot find list')
        throw err;
    }
}
