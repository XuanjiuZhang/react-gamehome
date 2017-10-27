import React from 'react'
import Loading from './loading'
import BattleResult from './BattleResult'
import BattleImg from './BattleImg'
export default class ScoreManager extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      canvas: undefined,
      displayDom: false,
      showLoading: false
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps)
    const fetctComplete = this.props.loadingData && !nextProps.loadingData
    const orientationChange = this.props.orientation && (this.props.orientation !== nextProps.orientation)
    if (!nextProps.fetchError && (orientationChange || fetctComplete)) {
      console.log('开始截图!')
      this.setState({displayDom: true, showLoading: nextProps.orientation === 'portrait'})
    }
  }

  componentWillUnmount() {
  }

  componentDidUpdate(prevProps, prevState) {
    const screenUp = this.props.orientation === 'portrait'
    if (!this.props.loadingData && screenUp && this.state.displayDom) {
      console.log('执行截图操作!')      
      setTimeout(() => {
        html2canvas(document.getElementById('share')).then(canvas => {
          this.setState({displayDom: false, showLoading: false, canvas})
        })
      }, 50)
    }  
  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    var loadingTip
    if (this.props.loadingData || this.state.showLoading) {
      loadingTip = '战绩加载中,请稍候...'
    } else if (this.props.fetchError) {
      loadingTip = this.props.errorMsg
    }
    return (
      <div className="full">
        {!this.props.loadingData && this.state.displayDom
          ? <BattleResult gameData={this.props.gameData} fetchError={this.props.fetchError}></BattleResult>
          : <BattleImg canvas={this.state.canvas}></BattleImg>}
        {this.props.loadingData || this.props.fetchError || this.state.showLoading
          ? <Loading loadingTip={loadingTip}></Loading>
          : null}
      </div>
    )
  }
}