import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, Platform,
  Slider, TextInput
} from 'react-native';



class ColorControl extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.state.title}</Text>
        <Slider onValueChange={(Val) => {
          this.props.onValueChanged(Val)
        }} step={1} value={this.state.value} minimumValue={0} maximumValue={255} style={{ width: 200 }} />
        <View><TextInput value={`${this.props.value}`} style={styles.textInput} /></View>
      </View>
    )
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 100,
      green: 150,
      blue: 200

    }
  }
  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Color Picker</Text>
      </View>
    )

  }

  onSliderChange = (color) => {
    console.log(color);
    this.setState(color)
  }
  render() {
    return (
      <View style={styles.container} >
        {this.renderHeader()}


        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 300, height: 350, flexDirection: 'column' }}>
            <View style={{ flex: 1 }}>
              <ColorControl title='R' value={this.state.red} onValueChanged={(val) => {
                const currentColor = this.state;
                const newColor = { ...currentColor, red: val }
                this.onSliderChange(newColor);
              }} />
              <ColorControl title='G' value={this.state.green} onValueChanged={(val) => {
                const currentColor = this.state;
                const newColor = { ...currentColor, green: val }
                this.onSliderChange(newColor);
              }} />
              <ColorControl title='B' value={this.state.blue} onValueChanged={(val) => {
                const currentColor = this.state;
                const newColor = { ...currentColor, blue: val }
                this.onSliderChange(newColor);
              }} />
            </View>
            <View style={{ flex: 1, backgroundColor: `rgb( ${this.state.red} ,${this.state.green},${this.state.blue})` }}></View>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  header: {
    height: 65,
    backgroundColor: '#ECEFF1',
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor: 'gray',
    // shadowOffset: {width: 0, height: 15},
    // shadowOpacity: 56
    elevation: 2,
  },
  headerText: {
    fontSize: 17,
    ...Platform.select({
      ios: {
        marginTop: 15,
      },
      android: {
        marginTop: 0,
      }

    })
  },
  textInput: {
    width: 50,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingBottom: 5,
    textAlign: 'center'
  }

});

