import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ModulesAPI from '../api/modulesAPI';
import ContentTabStrip from './ContentTabStrip.jsx';

class App extends React.Component {

  constructor(props, context) {
      super(props, context);
      /* set initial state */
      this.state = {selectedModule: 0, modules: [], openModules: [], openModulesDictionary: {}}; //openModulesDictionary is to avoid duplicates
      /* styles */
      this.styles = {
        container : {height: "auto",overflow: "hidden"},
        nav : {width: "20%",height: "100%",position: "fixed"},
        content : {zIndex: "-1",width: "80%",height: "auto",position: "absolute",right: "0px"}
      }
    }

    componentDidMount() {
      // TODO make this async to simulate real world
      this.setState({ modules: ModulesAPI.GetAllModulesIds() });      
    }

    openModule(module) {
      var openModule = this.state.openModulesDictionary[module.id];
      if(openModule == null) {
        var tempOpenModules = JSON.parse(JSON.stringify(this.state.openModulesDictionary)); // TODO use react immutable helper
        tempOpenModules[module.id] = module;
        var tempOpenModulesArray = this.state.openModules.concat([module]);
        this.setState({
          //openModules: [module].concat(this.state.openModules),
          openModules: tempOpenModulesArray,
          openModulesDictionary: tempOpenModules,
          selectedModule: tempOpenModulesArray.indexOf(module)
        });
      }
    }

    render() {

      var createMenuItem = function(module){
          return (<MenuItem onTouchTap={() => this.openModule(module)} key={module.id}>{module.name}</MenuItem>);
      }

      return(
        <div style={this.styles.container}>
            <Drawer style={this.styles.nav} containerStyle={this.styles.nav}>
                  <h2 style={{ marginLeft: 10 }}>My App</h2>
                  {this.state.modules.map(createMenuItem, this)}
            </Drawer>
            <div style={this.styles.content}>
              <ContentTabStrip selectedIndex={this.state.selectedModule} openModules={this.state.openModules}></ContentTabStrip>
            </div>
        </div>
    );
  }
}

export default App;
