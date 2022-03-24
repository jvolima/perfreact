import { useMemo } from "react";
import { List, ListRowRenderer } from "react-virtualized";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({ results, totalPrice, onAddToWishList }: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, style, key }) => {
    return (
      <div key={key} style={style}>
        <ProductItem 
          onAddToWishList={onAddToWishList} 
          product={results[index]}
        />
      </div>
    )
  }

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />

      {/*results.map(result => {
        return (
          <ProductItem onAddToWishList={onAddToWishList} key={result.id} product={result}/>
        )
      })*/}
    </div>
  )
}