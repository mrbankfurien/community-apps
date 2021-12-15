import 'react-native-gesture-handler'
import React from 'react'
import Naviguation from './masterNavigate/navigation'
import { Provider } from 'react-redux'
import settingStore from './store/settingStore'

export default class App extends React.Component {

  render() {
    return (
      <Provider store={settingStore}>
        <Naviguation/>
      </Provider>
    );
  }
}
 
