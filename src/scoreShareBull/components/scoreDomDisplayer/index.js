import * as actions from './actions.js'
import reducer, { mapStateToProps, mapDispatchToProps } from './reducer.js'
import view from './views/container'
import { connect } from 'react-redux'
import './scoreStyle.less'
import chunk from 'lodash/chunk'
window._ = { chunk }

const DomDisplayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(view)

export { actions, reducer, DomDisplayer }