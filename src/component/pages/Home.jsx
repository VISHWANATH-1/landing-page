import React, { useState } from "react";

function Home() {
  const [knowmore, setKnowMore] = useState(false);
  return (
    <>
     
      <div className="main-con">
        <div className="title">
          <h1>Recycle Your Battery</h1>
          <h3>best solution to manage E-west </h3>
          <p className="content">
            lead to a large number of lithium ion batteries in the {" "}
            <br />
            problem of waste, recycling and reuse.
          </p>
          <button className="btn" onClick={() => setKnowMore(!knowmore)}>Know more..</button>
        </div>

        {knowmore && (
          <table className="table-body">
            <tr>
              <th>Process</th>
              <th>Advantages</th>
              <th>Disadvatages</th>
              <th>Challenges</th>
            </tr>
            <tr>
              <td>Hydrometallurgical process</td>
              <td>
                High recovery rate, High Purity product, Low energyconsumption,
                Less waste gas,High Selectivity
              </td>
              <td>More Waste Water, Long Process</td>
              <td>Water Treatement Optimize the process</td>
            </tr>
            <tr>
              <td>Pyormetallurgical process</td>
              <td>
                Simple operation and short flow, No requirement for catagories
                and size of inputs, High Efficiency
              </td>
              <td>
                Li and Mn are not recovered High energy Consumption Low Recovery
                efficiency More Waste Gas and the cost of waste gas Treatement
              </td>
              <td>
                Reduce Energy Consumption and pollution emission Reduce
                envoronmental hazards combine hydrometallurgy well{" "}
              </td>
            </tr>
            <tr>
              <td>Direct Physical recycling process</td>
              <td>
                Short recovery route, Low energy consumption, Environmental
                friendl, High recovery rate
              </td>
              <td>
                High operational and equipment requirements, Incomplete recovery{" "}
              </td>
              <td>
                Reduce recovery cost, Lower the requirements for categories,
                Future optimize product performence
              </td>
            </tr>
          </table>
        )}
      </div>
    </>
  );
}

export default Home;
