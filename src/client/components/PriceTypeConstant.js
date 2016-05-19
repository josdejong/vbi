import React, { Component } from 'react'

import TextField from 'material-ui/lib/text-field'

export default class PriceTypeConstant extends Component {
  render () {
    return <div className="price-type">
      <p className="description">
        Enter an initial price and a change per year.
      </p>
      <TextField
          value={this.props.price.value}
          hintText="23k"
          floatingLabelText="Initial price"
          onChange={event => this.handleChange('value', event.target.value)} />
      <br />
      <TextField
          value={this.props.price.change}
          hintText="+3%"
          floatingLabelText="Percentage of change per year"
          onChange={event => this.handleChange('change', event.target.value)}  />
    </div>
  }

  handleChange(property, value) {
    const price = this.props.price
        .set('type', 'constant')
        .set(property, value)

    this.props.onChange(price)
  }

  static format (price) {
    return `${price.value || ''} ${price.change || ''}`
  }

  static label = 'Constant change'
}
