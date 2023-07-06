import React, { useEffect, useState } from 'react';
import Timer from '../Timer/Timer'

const Card = ({ jackpot, drawTime,drawDateTime, logo, lotteryName, result, links }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className="lottery-card">
            {!flipped ? <div className={`card-side blue-side ${flipped ? 'flipped' : ''}`}>
                <div className='logo-name'>
                    <img src={require(`../../assets/${logo}`)} alt={lotteryName} />
                    <p>{lotteryName}</p>
                </div>
                <h3>Jackpot: {jackpot}</h3>
                <Timer drawTime={drawTime}/>
                <button className='button-result' onClick={() => handleFlip()}>Result</button>
            </div>
                : <div className={`card-side result-side ${flipped ? 'flipped' : ''}`}>
                    <div className='logo-name'>
                        <img src={require(`../../assets/${logo}`)} alt={lotteryName} />
                        <p>{lotteryName}</p>
                    </div>
                    <span>Date Time:</span>
                    <span>{result.dateTime}</span>
                    <ul className='result-numbers'>
                        {result.numbers.map((number, index) => (
                            <li key={index}>{number}</li>
                        ))}
                    </ul>
                    <a  className='button-result' href={result.link} target="_blank">Link</a>
                </div>}
        </div>
    );
};

export default Card;