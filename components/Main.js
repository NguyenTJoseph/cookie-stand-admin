import { hours } from "../data/data";
import ReportTable from "./ReportTable.js";
import CreateForm from "./CreateForm.js";
import { useState } from "react";

export default function Main(props) {
  const [stores, setStores] = useState([]);
  const empty = hours.map((hour) => 0);
  empty.push(0)
  const [totals, setTotal] = useState(empty);

  function handleCreateStore(location, minCustomers, maxCustomers, avgCookies) {
    const reduce = (accumulator, curr) => accumulator + curr;
    const hourly_sales = [
      48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36,
    ];
    const newStore = {
      location: location,
      minCustomers: minCustomers,
      maxCustomers: maxCustomers,
      avgCookies: avgCookies,
      hourly_sales: hourly_sales,
      total: hourly_sales.reduce(reduce),
      id: stores.length,
    };
    props.updateStoreCount([...stores, newStore]);
    setStores([...stores, newStore]);
    handlesStoreTotals(newStore);
    
  }

  function handlesStoreTotals(store) {
    const reduce = (accumulator, curr) => accumulator + curr;
    let temp = totals;
    let total = store.hourly_sales.reduce(reduce);
    for (let i = 0; i <= hours.length - 1; i++) {
      temp[i] += store.hourly_sales[i];
    }
    temp[14] += total;
    setTotal(temp);
    console.log(temp);
  }
  return (
    <>
      <CreateForm createStore={handleCreateStore} />
      <ReportTable stores={stores} hours={hours} totals={totals} />
    </>
  );
}
