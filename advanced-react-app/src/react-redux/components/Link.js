import React from 'react'
import PropTypes from 'prop-types'

//children是React自带的属性，表示子节点，在Footer.js中可以看到children为字符串
const Link = (data) => {
  console.log(data);
  const { active, children, onClick } = data
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link