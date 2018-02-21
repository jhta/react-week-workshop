import React from 'react'
import Header from './Header'
import FixedBar from './FixedBar'
import List from './List'
import { list } from './sampleData'
import './style.css'

const addItem = (list = [], itemText = '') => list
  .map(item => item.text === itemText
    ? ({
        ...item,
        added: !item.added
      })
    : item
  )

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showContent: false,
      showButtons: true,
      shoppingList: [],
      addedItemsCount: 0,
      showMessageFinish: false,
      list
    }
  }

  addItem = itemText => {
    const { list } = this.state
    const newList = addItem(list, itemText)
    this.setState({
      list: newList,
      addedItemsCount: newList.filter(item => item.added).length
    })
  }

  onShowContent = event => {
    event.preventDefault()
    this.setState({
      showContent: !this.state.showContent,
      showButtons: !this.state.showButtons
    })
  }

  onFinish = event => {
    event.preventDefault()
    this.setState({
      showButtons: false,
      showMessageFinish: true
    })
  }

  render () {
      return (
        <div>
        <section className='Wrapper'>
          <Header
            onShowContent={this.onShowContent}
            onFinish={this.onFinish}
            show={this.state.showButtons}
            showMessageFinish={this.state.showMessageFinish}
          />
          <List
            show={this.state.showContent}
            list={this.state.list}
            addItem={this.addItem}
          />
        </section>
        <FixedBar
          show={this.state.showContent}
          count={this.state.addedItemsCount}
        />
      </div>
    )
  }
}

export default App
