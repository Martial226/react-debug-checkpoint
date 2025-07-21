import React, { useState } from 'react'
import Child from './Child'

function Parent() {
  // État pour le compteur
  const [count, setCount] = useState(0)

  //  Bug initial : user est undefined
  // const [user, setUser] = useState(); // Cela provoquerait une erreur

  //  Correction : initialisation correcte
  const [user, setUser] = useState({ name: 'Martial' })

  return (
    <div>
      <h2>Composant Parent</h2>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>

      {/* Composant enfant qui reçoit le compteur */}
      <Child count={count} />

      {/* Affichage d'une propriété d'un objet d'état */}
      <p>Nom de l'utilisateur : {user.name}</p>
    </div>
  )
}

export default Parent
