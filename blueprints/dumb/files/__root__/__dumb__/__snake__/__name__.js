import React, { Component, PropTypes } from 'react'

import './<%= pascalEntityName %>.scss'

class <%= pascalEntityName %> extends Component {

  static propTypes = {
    propName: PropTypes.any.isRequired,
  }

  render() {
    return (
      <div className="<%= pascalEntityName %>">OHAI</div>
    )
  }
}


export default <%= pascalEntityName %>
