import React from 'react'
import Loading from './loading'
import BattleResult from './BattleResult'
import BattleImg from './BattleImg'
export default class ScoreManager extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps', nextProps)
  }

  componentWillUnmount() {
  }

  componentDidMount() {
    this.props.fetchData()
    console.log(this.props)
  }

  render() {
    return (
      <div className="full">
        {this.props.loadingData
          ? <Loading></Loading>
          : null}
        {!this.props.loadingData && this.props.displayDom
          ? <BattleResult></BattleResult>
          : <BattleImg></BattleImg>}
      </div>
    )
  }
}