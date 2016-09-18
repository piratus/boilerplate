import React, { Component, PropTypes } from 'react'

import './Button.scss'

class Button extends Component {

  static propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    value: PropTypes.any,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    disabled: false,
    onClick: () => {},
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onClick(this.props.value)
  }

  render() {
    const { children, disabled } = this.props
    return (
      <button
        className="Button"
        disabled={ disabled }
        onClick={ this.handleClick }
      >
        { children }
      </button>
    )
  }
}

export default Button
