import React from 'react';
import ReactDOM from 'react-dom';
import {Tab} from 'material-ui/Tabs';

class ContentTab extends Tab {

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: true
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // optimization, once tab is open, do not re-render
    if(this.state.open == true)
      return false;
  }

  render() {
    return super.render();
  }
}

export default ContentTab;
