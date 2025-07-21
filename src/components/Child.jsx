import React from 'react'

function Child({ count }) {
  return (
    <div>
      <h3>Composant Enfant</h3>
      <p>Le compteur est à : {count}</p>
    </div>
  )
}

export default Child
