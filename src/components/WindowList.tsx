import React from "react";
import { FixedSizeList as List } from "react-window";

const items = Array.from({ length: 766955 }, (_, i) => `Item #${i + 1}`);

type RowProps = {
  index: number;
  style: React.CSSProperties;
};

function Row({ index, style }: RowProps) {
  return (
    <div style={style} key={index}>
      {items[index]}
    </div>
  );
}

function WindowList() {
  return (
    <>
      <List height={90} itemCount={items.length} itemSize={35} width={300}>
        {Row}
      </List>
      <h3>
        Only visible rows are rendered, optimizing performance for large lists
        500,000.
      </h3>
    </>
  );
}

export default WindowList;
