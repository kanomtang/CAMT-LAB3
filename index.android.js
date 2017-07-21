/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  SectionList,
  Button
} from 'react-native';
 
export default class AwesomeProject extends Component {
 

 
    constructor(){
       super(); 
        const TestArrat = ['row1','row2','row3']
       const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); this.state = { dataSource: ds.cloneWithRows(TestArrat), };
      state = {
    active: true,
    newVar: ''
  }
    }
    _removeText = () => {
      this.TestArrat.pop();
    }

   _addText = (value) => {
   
    var newStateArray = this.state.TestArrat.slice();
    newStateArray.push(value);
    this.setState(TestArrat: newStateArray);
   }
   
    render() {
          return (
            <View>
             <ListView dataSource={this.state.dataSource} 
              renderRow={(rowData) => <Text>{rowData}</Text>} /> 
              
              <View >
                <Button onPress = {() => {this._addText(this.state.newVar)}}
                title="Push "

                 />
                </View>
              
              
              <TextInput
                placeholder="type something"
                onChangeText={(newVar) => this.setState({newVar})}
                />
            <View >
                <Button onPress = {() => {this._removeText()}} 
                title="Pop "
               
                 />
                </View>
              </View>
              ); 
        } 
      } 

            

             
            
        
 

const styles = StyleSheet.create({
    container: {
        flex: 1
 
    }
   
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
