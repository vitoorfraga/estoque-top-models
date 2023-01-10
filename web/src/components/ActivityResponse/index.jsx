import React from 'react';
import './styles.css';

export const showActivityIndicator = () => document.getElementById("activity-indicator").style.display = 'flex';
export const hideActivityIndicator = () => document.getElementById("activity-indicator").style.display = 'none';

export default class ActivityIndicator extends React.Component {
  render() {
    return (
      <section className="activity-indicator" id="activity-indicator">
        <div id="bg1">
          <img
            src={require("../../images/brand/p2go.png")}
            alt="power2go brand"
            id="logo"
          />
          <div id="row">
            <div id="bar1"></div>
            <div id="bar2"></div>
            <div id="bar3"></div>
          </div>
        </div>
      </section>
    )
  }
}