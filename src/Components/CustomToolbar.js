import React from "react";
import Toolbar from "react-big-calendar/lib/Toolbar";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default class CustomToolbar extends Toolbar {
  componentDidMount() {
    const view = this.props.view;
    console.log(view);
  }

  render() {
    return (
      <div className="rbc-toolbar">
        <button type="button" onClick={() => this.navigate("TODAY")}>
          today
        </button>
        <div className="rbc-btn-group">
          <button type="button" onClick={() => this.navigate("PREV")}>
            &lt;
          </button>
          <button type="button" onClick={() => this.navigate("NEXT")}>
            &gt;
          </button>
        </div>
        <div className="rbc-toolbar-label">{this.props.label}</div>
      </div>
    );
  }
}
