import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    selectedPage: "Profile"
  }

  handleClick = (e)=>{
    switch(e.target.id){
      case "profile":
      this.setState({
        selectedPage: "Profile"
      })
      break
      case "photo":
      this.setState({
        selectedPage: "Photos"
      })
      break
      case "cocktail":
      this.setState({
        selectedPage: "Cocktails"
      })
      break
      case "pokemon":
      this.setState({
        selectedPage: "Pokemon"
      })
      break
    }

  }
  render() {

    /*

    Replace the code below!
    Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected.
    Which component should have state? Which component should have methods to control state?
    Where should these methods be called?

    */

    const detailsToDisplay = ()=>{
      switch(this.state.selectedPage){
        case "Profile":
        return <Profile />
        case "Photos":
        return <Photos />
        case "Cocktails":
        return <Cocktails />
        case "Pokemon":
        return <Pokemon />
      }
    }

    return (
      <div>
        <MenuBar handleClick={this.handleClick}/>
        {detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
