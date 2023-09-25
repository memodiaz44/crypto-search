"use client"
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Coin from "./Coins";
import Pagination from "./Pagination";
import dotenv from "dotenv";
dotenv.config();


const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);
  const searchCoinName = useSelector((state: any) => state.coins.currency);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
            process.env.NEXT_PUBLIC_APP_URL as string
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setCoins(data);
      } catch (error: any) {
        alert(error.message);
      }
    };

    fetchData();
  }, []);

  // Filter the coins based on the search term
  const filteredCoins = coins.filter((coin: any) =>
    coin.name.toLowerCase().includes(searchCoinName.toLowerCase())
  );

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      {filteredCoins.length === 0 ? (
        <p>No results found</p>
      ) : (
        <>
          <table className="coinTable">
            <tbody>
              {currentCoins.map((coin: any) => (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  volume={coin.total_volume}
                  priceChange={coin.price_change_percentage_24h}
                  marketCap={coin.market_cap}
                  marketCapRank={coin.market_cap_rank}
                />
              ))}
            </tbody>
          </table>
          <Pagination
            coinsPerPage={coinsPerPage}
            totalCoins={filteredCoins.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </>
      )}
    </>
  );
};

export default CoinTable;


