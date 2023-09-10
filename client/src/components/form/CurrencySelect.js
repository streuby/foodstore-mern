import React from "react";
import { Form } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import { useSelector } from "react-redux";

const CurrencySelect = ({
  selectedCurrencies,
  setSelectedCurrencies,
  multiselect,
}) => {
  const currencyList = useSelector((state) => state.currencyList);
  const { currencies } = currencyList;

  return (
    <Form.Group controlId="attribute">
      <Form.Label>Currencie</Form.Label>
      {multiselect ? (
        <MultiSelect
          options={currencies.map((a) => ({
            label: `${a.name} - ${a.symbol}`,
            value: a._id,
            symbol: a.symbol,
            isocode: a.isocode,
            name: a.name,
          }))}
          value={selectedCurrencies}
          onChange={setSelectedCurrencies}
          labelledBy="Select Currencies"
          className="product-currencies"
        />
      ) : (
        <Select
          options={currencies.map((a) => ({
            label: `${a.name} - ${a.symbol}`,
            value: a._id,
            symbol: a.symbol,
            isocode: a.isocode,
            name: a.name,
          }))}
          value={selectedCurrencies}
          onChange={setSelectedCurrencies}
          labelledBy="Select Currencies"
          className="product-currencies"
        />
      )}
    </Form.Group>
  );
};

export default CurrencySelect;
