import { useState } from "react";

export default function ReportTable(props) {
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
              <tr key={store.id}>
                <td className="border-2">{store.location}</td>
                {store.hourly_sales.map((hour) => (
                  <td className="border-2" key={hour}>{hour}</td>
                ))}
                <td className="border-2">{store.total}</td>
              </tr>
            ))}
            <tfoot>
              <tr>
                <th className="border-2">Totals</th>
                {props.totals.map((total, index) => (
                  <td className="border-2" key={index}>{total}</td>
                ))}
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </main>
  );
}
