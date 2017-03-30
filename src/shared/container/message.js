// @flow

import { connect } from 'react-redux'

import Message from '../component/messge'

const mapStateToProps = state => ({
    message: state.hello.get('message'),
})

export default connect(mapStateToProps)(Message)
