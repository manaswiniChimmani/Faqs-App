// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {clickedList: []}

  clickPlus = id => {
    this.setState(prevState => ({
      clickedList: [...prevState.clickedList, id],
    }))
  }

  clickMinus = id => {
    const {clickedList} = this.state
    const newList = clickedList.filter(each => each !== id)
    this.setState({clickedList: newList})
  }

  render() {
    const {faqsList} = this.props
    const {clickedList} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="h1">FAQs</h1>
          <ul className="ul">
            {faqsList.map(each => (
              <FaqItem
                faqs={each}
                key={each.id}
                clickMinus={this.clickMinus}
                clickPlus={this.clickPlus}
                isClicked={clickedList.includes(each.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
