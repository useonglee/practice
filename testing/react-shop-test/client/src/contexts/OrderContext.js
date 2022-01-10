import { createContext, useEffect, useMemo, useState } from "react";

export const OrderContext = createContext();

const pricePerItem = {
  products: 1000,
  options: 500,
};

function calculateSubTotal(orderType, orderCounts) {
  let optionCount = 0;

  for (const count of orderCounts[orderType].value()) {
    optionCount += count;
  }

  return optionCount * pricePerItem[orderType];
}

function OrderContextProvider(props) {
  const [orderCounts, setOderCounts] = useState({
    products: new Map(),
    options: new Map(),
  });

  const [totals, setTotals] = useState({
    products: 0,
    ooptions: 0,
    total: 0,
  });

  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, orderType) {
      const newOrderCounts = { ...orderCounts };
      const orderCountsMap = orderCounts[orderType];
      orderCountsMap.set(itemName, parseInt(newItemCount));

      setOderCounts(newOrderCounts);
    }

    return [{ ...orderCounts, totals }, updateItemCount];
  }, [orderCounts, totals]);

  useEffect(() => {
    const productsTotal = calculateSubTotal("products", orderCounts);
    const optionsTotal = calculateSubTotal("options", orderCounts);
    const total = productsTotal + optionsTotal;

    setTotals({
      products: productsTotal,
      options: optionsTotal,
      total: total,
    });
  }, [orderCounts]);

  return <OrderContext.Provider value={value} {...props} />;
}

export default OrderContextProvider;
