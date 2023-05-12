// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqs, clickPlus, clickMinus, isClicked} = props
  const {id, questionText, answerText} = faqs
  const onHide = () => {
    clickMinus(id)
  }
  const onShow = () => {
    clickPlus(id)
  }

  const alt = isClicked ? 'minus' : 'plus'

  const btnImg = isClicked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const q = (
    <div className="q">
      <h1 className="que">{questionText}</h1>
      <button onClick={onShow} className="btn" type="button">
        <img src={btnImg} alt={alt} />
      </button>
    </div>
  )

  const qa = (
    <div>
      <div className="q">
        <h1 className="que">{questionText}</h1>
        <button onClick={onHide} className="btn" type="button">
          <img src={btnImg} alt={alt} />
        </button>
      </div>
      <hr />
      <div>
        <p className="ans">{answerText}</p>
      </div>
    </div>
  )

  const results = isClicked ? qa : q

  return <li>{results}</li>
}
export default FaqItem
