import StandRow from "./StandRow";

export default function ReportTable(props) {
  function allTotals(){
    let total = 0
    props.stores.map(store => total += parseInt(store.description))
    return total
  }

  return (
    <main>
      <div className="text-center">
        {props.stores.length == 0 ? (
          <h2 className="text-center"> No Cookie Stands Available</h2>
        ) : (
          <table className="mx-auto">
            <tr>
              <th className="p-2">Location</th>
              {props.hours.map((hour) => (
                <th className="p-2" key={hour}>
                  {hour}
                </th>
              ))}
              <th className="p-2">Total</th>
            </tr>
            {props.stores.map((store) => (
              <StandRow
                key={store.id}
                info={store}
                deleteStand={props.deleteResource}
              />
            ))}
            <tfoot>
              <tr>
                <th className="border-2">Totals</th>
                {props.hours.map((hour, index) => {
                  let total = 0;
                  props.stores.map(
                    (store) => (total += store.hourly_sales[index])
                  );
                  return <td className="border-2" key={index}>{total}</td>;
                })}
                <td className="border-2">{allTotals()}</td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </main>
  );
}
