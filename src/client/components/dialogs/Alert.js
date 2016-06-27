import React from 'react'

import Dialog from 'material-ui/lib/dialog'
import FlatButton from 'material-ui/lib/flat-button'

/**
 * Usage:
 *
 *     <Alert ref="alertDialog" />
 *
 *     this.refs.alertDialog.show({
 *       title: 'Rename category',
 *       description: <div>
 *         <p>
 *           Built-in categories cannot be renamed.
 *         </p>
 *       </div>
 *     })
 *        .then(() => {
 *          console.log('alert closed...')
 *        })
 *
 *     this.refs.alertDialog.hide()
 *
 */
export default class Alert extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      open: false,
      title: null,
      description: null,
      handler: function () {}
    }
  }

  render () {
    const actions = [
      <FlatButton
          label="Ok"
          primary={true}
          keyboardFocused={true}
          onTouchTap={event => this.hide() }
      />
    ]

    return <Dialog
        title={this.state.title}
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={event => this.hide() } >
      {this.state.description}
    </Dialog>
  }

  show ({ title, description }) {
    return new Promise((resolve, reject) => {
      this.setState({
        open: true,
        title: title || 'Title',
        description: description || 'Description',
        handler: resolve
      })
    })
  }

  hide () {
    this.state.handler()
    this.setState({
      open: false,
      handler: function () {}
    })
  }

}