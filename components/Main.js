import { hours } from "../data/data";
import ReportTable from "./ReportTable.js";
import CreateForm from "./CreateForm.js";
import { useState } from "react";

export default function Main(props) {
  const empty = hours.map((hour) => 0);
  empty.push(0);
  const [totals, setTotal] = useState(empty);
  
  function handleCreateStore(location, minCustomers, maxCustomers, avgCookies) {
    const reduce = (accumulator, curr) => accumulator + curr;
    const hourly_sales = [
      48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36,
    ];
    const newStore = {
      location: location,
      minimum_customers_per_hour: parseInt(minCustomers),
      maximum_customers_per_hour: parseInt(maxCustomers),
      average_cookies_per_sale: parseFloat(avgCookies),
      hourly_sales: hourly_sales,
      description: hourly_sales.reduce(reduce),
      owner: props.user.id,
    };
    props.updateStoreCount(props.resources);
    props.createResource(newStore);
  }
  
  props.updateStoreCount(props.resources)
  
  
  function handlesStoreTotals() {
    let temp = empty;
    props.resources.map(store => {
      for (let i = 0; i <= hours.length - 1; i++) {
        temp[i] += store.hourly_sales[i];
        temp[14] += parseInt(store.description)
    }})
    
    setTotal(temp);
    console.log(totals)
  }
  
  
  return (
    <>
      <CreateForm createStore={handleCreateStore} />
      <ReportTable
        stores={props.resources}
        hours={hours}
        totals={totals}
        deleteResource={props.deleteResource}
        createResource={props.createResource}
        handlesStoreTotals={handlesStoreTotals}
      />
    </>
  );
}
