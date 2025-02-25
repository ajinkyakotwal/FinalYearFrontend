import React    from "react";
// import Transaction from "../../transaction.json";
import Item from "../../components/Item/Item.js";
import "./Block.css";
import "../Item/Item.css";

function Block(props) {
  // const [visible, setVisible] = React.useState(false);
  return (
    <div className="block">
      
      {props.block.map(transaction => (
        
        <Item name={transaction.title} description={transaction.Description}/>
         
      ))}
      
    </div>
  );
};

export default Block;
