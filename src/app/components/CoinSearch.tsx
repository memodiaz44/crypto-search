"use client"
import React, { useState } from "react";
import { setAllCoins } from "../states/coinSlice";
import { useDispatch, useSelector } from 'react-redux';
import CoinTable from "./CoinTable";

function CoinSearch() {


    const [searchCoinName, setSearchCoinName] = useState(""); // State to store the search term
    const dispatch = useDispatch(); // Get the dispatch function from Redux

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const searchTerm = event.target.value;
        setSearchCoinName(searchTerm); // Update the search term state
        dispatch(setAllCoins(searchTerm)); // Dispatch the action to update the Redux store
    };

    return (
        <>
            <div className="coinSearchCointainer">
                <div className="coinSearch">
                    <h1 className="coinText">Search for a Coin</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={handleChange}
                        />
                    </form>
                </div>
                <CoinTable />
            </div>
        </>
    );
}

export default CoinSearch;
