import { connect } from 'react-redux'

import <%= pascalEntityName %> from '../components/<%= snakeEntityName %>'

const mapStateToProps = state => {
  return {}
}

const mapActionsToProps = {
}

export default connect(
  mapStateToProps,
  mapActionsToProps,
)( <%= pascalEntityName %> )
