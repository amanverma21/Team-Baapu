import React from 'react'
import Plot from 'react-plotly.js';

function Stock(props) {
  let stockChartXValues = [];
  let stockChartYValues = [];
  const companyData = props.companyData;
  const length = companyData.length;
  for (let i = 0; i < length; i++) {
    stockChartXValues.push(companyData[i].date);
    stockChartYValues.push(companyData[i].close);
  }
  return (
    <div>
      <h3>ADVANCED CHART</h3>
      <h4>{props.companyData[0].companyName}</h4>
      <Plot
        data={[
          {
            x: stockChartXValues,
            y: stockChartYValues,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
        ]}
        layout={{ width: 900, height: 500, title: "Stock Plot" }}
      />
    </div>
  );
}

export default Stock