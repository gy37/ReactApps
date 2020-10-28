import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Picker extends Component {
  render() {
    const { value, onChange, options } = this.props

    return (
      <span>
        <h2>{value}</h2>
        <span>Select Other Topic</span>{' '}
        <select onChange={e => onChange(e.target.value)}
                value={value}>
          {options.map(option =>
            <option value={option} key={option}>
              {option}
            </option>)
          }
        </select>
      </span>
    )
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}