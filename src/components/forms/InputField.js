import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const InputField = (props) => {
  const [iputValue, setInputValue] = useState(props.value[props.fieldName])

  const onInput = e => {
    setInputValue(e.target.value)
    props.setValue(prevValue => ({
      ...prevValue,
      [props.fieldName]: e.target.value
    }))
  }
  return (
    <div>
      <input value={iputValue} onInput={onInput} type={props.type} className={classNames('form-control', props.className)} placeholder={props.placeholder} />
    </div>
  )
}

InputField.prototype = {
  value: PropTypes.object,
  setValue: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  fieldName: PropTypes.string,
}

InputField.defaultProps = {
  type: 'string',
  placeholder: 'Type Something',
}

export default InputField