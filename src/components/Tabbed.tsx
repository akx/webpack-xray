import * as React from 'react';

export interface TabInfo {
  id: string;
  title?: string;
  render: () => React.ReactElement<any>;
}

interface TabbedProps {
  tabsProps?: { string: any };
  tabs: TabInfo[];
}

interface TabbedState {
  activeTabId?: string;
}

export default class Tabbed extends React.Component<TabbedProps, TabbedState> {
  state: TabbedState = {
    activeTabId: undefined,
  };

  constructor(props) {
    super(props);
    if (this.props.tabs.length) {
      this.state = {activeTabId: this.props.tabs[0].id};
    }
  }

  render() {
    const {activeTabId} = this.state;
    const activeTab = this.props.tabs.find((tab) => tab.id === activeTabId);
    return (
      <div className="tabbed">
        <div className="tabs" {...this.props.tabsProps}>
          <ul>
            {
              this.props.tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={tab.id === activeTabId ? 'is-active' : undefined}
                >
                  <a onClick={(e) => this.setState({activeTabId: tab.id})}>{tab.title || tab.id}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="tabbed-content">
          {activeTab ? activeTab.render() : null}
        </div>
      </div>
    );
  }
}
