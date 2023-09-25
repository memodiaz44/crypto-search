import React from "react";

interface CoinProps {
  name: string;
  image: string;
  symbol: string;
  price: number;
  volume: number;
  priceChange: number;
  marketCap: number;
  marketCapRank: number;
}

const Coin: React.FC<CoinProps> = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
  marketCapRank,
}) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-2">
        <img src={image} alt={name} className="w-8 h-8" />
      </td>
      <td className="text-left pl-2 md:pl-4 lg:pl-8">{name}</td>
      <td className="md:hidden">{symbol.toUpperCase()}</td>
      <td>${price.toFixed(2)}</td>
      <td className="md:table-cell hidden">{marketCapRank}</td>
      <td
        className={`${
          priceChange < 0 ? "text-red-600" : "text-green-600"
        } font-semibold`}
      >
        {priceChange.toFixed(2)}%
      </td>
      <td className="hidden md:table-cell">${marketCap.toLocaleString()}</td>
      <td className="hidden md:table-cell">${volume.toLocaleString()}</td>
    </tr>
  );
};

export default Coin;
