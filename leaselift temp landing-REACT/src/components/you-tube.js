import React from 'react'

import PropTypes from 'prop-types'

import './you-tube.css'

const YouTube = (props) => {
  return (
    <div id={props.youTubeId} className="you-tube-thq-you-tube-elm">
      <img
        alt={props.pastedImageAlt}
        src={props.pastedImageSrc}
        className="you-tube-thq-pasted-image-elm"
      />
    </div>
  )
}

YouTube.defaultProps = {
  youTubeId: '',
  pastedImageSrc: '/logos/pastedimage-smjb.svg',
  pastedImageAlt: 'pastedImage',
}

YouTube.propTypes = {
  youTubeId: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  pastedImageAlt: PropTypes.string,
}

export default YouTube
