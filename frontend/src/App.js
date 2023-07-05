import logo from './logo.svg';
import './App.css';
import LotteryCardList from './cmps/LotteryCardList/LotteryCardList'
import { useEffect } from 'react';
import listService from './service/listService';
import { useState } from 'react';

function App() {
  const [dataList, setDataList] = useState(null)
  const [filteredDataList, setFilteredDataList] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const data = await listService.loadUsers()
      setDataList(data)
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);;
  }, [])

  useEffect(() => {
    console.log('filteredDataList', filteredDataList)
  }, [filteredDataList])

  useEffect(() => {
    if (!dataList) return
    handleFilter()
  }, [dataList,filter])


  const handleFilter = () => {
    console.log('handleFilter', filter.length)
    if (filter.length > 0) {
      const filtered = dataList.filter((item) =>
        item.lotteryName.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredDataList(filtered);
    }else if(filter.length === 0){
      setFilteredDataList(dataList);
    }
  };

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
        {filteredDataList && <LotteryCardList data={filteredDataList} />}
      </header>
    </div>
  );
}

export default App;


