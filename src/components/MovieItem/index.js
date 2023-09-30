// Write your code here
import './index.css'

const Item = props => {
  const {image} = props

  return (
    <div>
      <img src={image} alt="thumbnail" />
    </div>
  )
}
export default Item
