// Write your code here
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import Item from '../MovieItem'

const Slide = props => {
  const {list} = props
  const {thumbnailUrl, videoUrl, id} = list

  return (
    <Popup
  modal
      trigger={
        <button type="button" className="button1">
          <Item image={thumbnailUrl} key={id} />
        </button>
      }
      position="centre"
    >
      {close => (
        <>
          <button
            type="button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose />
          </button>
          <ReactPlayer url={videoUrl} />
        </>
      )}
    </Popup>
  )
}
export default Slide
