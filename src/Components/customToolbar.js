import React from "react";
import Toolbar from "react-big-calendar/lib/Toolbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const TabletPC = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  return isTablet ? children : null;
};

class CustomToolbar extends Toolbar {
  componentDidMount() {
    const view = this.props.view;
  }

  render() {
    return (
      <div className="rbc-toolbar">
        <TabletPC>
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
        </TabletPC>
        <Mobile>
          <button type="button" onClick={() => this.navigate("TODAY")}>
            today
          </button>
          <div className="rbc-btn-group">
            <button type="button" onClick={() => this.navigate("PREV")}>
              &lt;
            </button>
            <div className="rbc-toolbar-label">{this.props.label}</div>
            <button type="button" onClick={() => this.navigate("NEXT")}>
              &gt;
            </button>
          </div>
        </Mobile>
      </div>
    );
  }
}

export default CustomToolbar;
