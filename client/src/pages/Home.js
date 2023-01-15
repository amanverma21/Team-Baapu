import { Slider } from "antd";
import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";

function Home() {
  const value = 100;
  return (
    <div className="details">
      <div className="nav-bar">
        <select name="company" id="company" className="drop-down nav-barRight">
          <option value="NSE">NSE</option>
          <option value="BSE">BSE</option>
          <option value="ASHOKEY">ASHOKEY</option>
          <option value="CIPLA">CIPLA</option>
          <option value="RELIANCE">RELIANCE</option>
          <option value="TATASTEEL">TATA STEEL</option>
          <option value="EICHERMOTOR">EICHER MOTOR</option>
        </select>
        <span className="nav-bar">|</span>
        <span className="nav-bar">FUTURE</span>
        <span className="nav-bar">|</span>
        <span className="nav-bar">OPTIONS</span>
      </div>
      <div>
        <h2>NIFTY 50</h2>
        <div className="line"></div>
      </div>
      <div className="stock-data">
        <div className="stock-data-left">
          <h1>17,972.15</h1>
          <div>
            {value > 100 ? (
              <h4 className="text-success">
                {" "}
                <GoTriangleUp /> 117 (0.64%)
              </h4>
            ) : (
              <h4 className="text-danger">
                <GoTriangleDown /> 100 (-0.34%)
              </h4>
            )}
            <p>As on 13 Jan,2023 13:25IST</p>
          </div>
        </div>
        <div className="stock-data-right">
          <h5>Day Range</h5>
          <div className="stock-data">
            <h5>17774.25</h5>
            <h5>17774.25</h5>
          </div>
          <div className="range">
            <div className="field">
              <div className="value left">L</div>
              <input type="range" min="0" max="200" value="100" steps="1" />
              <div className="value right">R</div>
            </div>
          </div>
          <h5>52 week Range</h5>
          <div className="stock-data">
            <h5>17774.25</h5>
            <h5>17774.25</h5>
          </div>
          <div className="range">
            <div className="field">
              <div className="value left">L</div>
              <input type="range" min="0" max="200" value="100" steps="1" />
              <div className="value right">R</div>
            </div>
          </div>
            <h5>
              Returns
            </h5>
          <div>
            <select
              name="company"
              id="company"
              className="drop-down nav-barRight"
            >
              <option value="NSE">NSE</option>
              <option value="BSE">BSE</option>
              <option value="ASHOKEY">ASHOKEY</option>
              <option value="CIPLA">CIPLA</option>
              <option value="RELIANCE">RELIANCE</option>
              <option value="TATASTEEL">TATA STEEL</option>
              <option value="EICHERMOTOR">EICHER MOTOR</option>
            </select>
            <span>3.55%</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="links-container">
        <ul className="links">
          <li>OVERVIEW</li>
          <li>CHART</li>
          <li>TECHNICALS</li>
          <li>NEWS</li>
          <li>CONTRIBUTION</li>
          <li>COMPONENTS</li>
          <li>FORUM</li>
        </ul>
      </div>
      <hr />
      <div className="below-table">
        <table className="tables">
          <tr>
            <td>Open</td>
            <td>17867.50</td>
          </tr>
          <tr>
            <td>Previous Close</td>
            <td>17867.50</td>
          </tr>
          <tr>
            <td>Day High</td>
            <td>17867.50</td>
          </tr>
        </table>
        <table className="tables">
          <tr>
            <td>Day Low</td>
            <td>17867.50</td>
          </tr>
          <tr>
            <td>52 week High</td>
            <td>17867.50</td>
          </tr>
          <tr>
            <td>52 Week High</td>
            <td>17867.50</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Home;
