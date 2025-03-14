import React from "react";
import numeral from "numeral";


const CurrencyFormat = ({ value }) => {
    const formattedValue = numeral(value).format("0,0.00");
    return <div>{formattedValue}</div>
}

export default CurrencyFormat;