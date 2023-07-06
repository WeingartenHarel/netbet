import './App.css';
import LotteryCardList from './cmps/LotteryCardList/LotteryCardList'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCards } from './store/actions/cardActions';
import Timer from './cmps/Timer/Timer'

function App() {
  const dispatch = useDispatch()
  const [filteredDataList, setFilteredDataList] = useState([]);
  const [filter, setFilter] = useState('');
  const dataList = useSelector((state) => state.cardReducer.cards)
  const [page, setPage] = useState(1);

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      dispatch(loadCards(page))
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);;
  }, [page])

  useEffect(() => {
    if (!dataList) return
    handleFilter()
  }, [dataList, filter])


  const handleFilter = () => {
    if (filter.length > 0) {
      const filtered = dataList.filter((item) =>
        item.lotteryName.toLowerCase().includes(filter.toLowerCase()) ||
        item.jackpot.toLowerCase().includes(filter.toLowerCase()) ||
        item.drawTime.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredDataList(filtered);
    } else if (filter.length === 0) {
      setFilteredDataList(dataList);
    }
  };

  const handleNext = () => {
    if (page * 4 === dataList.length + 1) return
    setPage(page + 1)
  }

  const handlePrev = () => {
    if (page === 1) return
    setPage(page - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>Hellow world Netbet</h4>
        <div class="input-container">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter by lottery name" />
          <label>Filter:</label>
        </div>
        <div className='pagination'>
          <button className='pagination-button' onClick={handlePrev}>Prev</button>
          <button className='pagination-button' onClick={handleNext}>Next</button>
        </div>
        {filteredDataList && <LotteryCardList data={filteredDataList} />}
      </header>
    </div>
  );
}

export default App;


