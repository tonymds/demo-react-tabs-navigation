import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Tabs, Tab} from 'material-ui/Tabs';
import ContentTab from './ContentTab.jsx';

injectTapEventPlugin();

class ContentTabStrip extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {selectedIndex: 0};
  }

  componentDidUpdate(){
    // This is a hack to expand tab bar width
    // TODO find a better way, maybe implement own Tab component
    var tabNode = ReactDOM.findDOMNode(this.tabBar);
    var tabBarNode=(tabNode.firstElementChild||DOMNode.firstChild);
    tabBarNode.style.width = "auto";

    if(this.state.selectedIndex != this.props.selectedIndex){
      this.setState({ selectedIndex: this.props.selectedIndex });
    }
  }

  getContentFromModuleId(moduleId){
    let Module = require('./../modules/Module' + moduleId + '.jsx').default;
    return (<Module></Module>);
  }

  render() {

    var tabs = [];
    var count = 0;
    for (var i = 0; i < this.props.openModules.length; i++) {
      count++;
      var module = this.props.openModules[i];
      //tabs.push(<Tab key={module.id} style={{ width: 200 }} label={module.name}>{module.name} {new Date().getTime()}</Tab>);
      tabs.push(
        <Tab key={module.id} style={{ width: 200 }} label={module.name}>
          <div style={{padding:20}}>{this.getContentFromModuleId(module.id)}</div>
        </Tab>);
    }

    var tempWidth = 200 * count;
    return(
      <Tabs ref={(ref) => this.tabBar = ref} tabItemContainerStyle={{ width: tempWidth }}>
        {tabs}
      </Tabs>
    );
  }
}

export default ContentTabStrip;
