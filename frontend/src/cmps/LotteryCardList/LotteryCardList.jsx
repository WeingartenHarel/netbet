import React, { useState } from 'react';
import Card from '../Card/Card'

const LotteryCardList = ({data}) => {
  return (
    <div className="lottery-card-list">
      {data.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );
};

export default LotteryCardList;