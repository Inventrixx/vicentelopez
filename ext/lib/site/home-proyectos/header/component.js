import React from 'react'

export default ({ stage }) => (
  <header className='banner-proyectos'>
    <h1 className='proyectos-title'>{stage === 'votacion' ? 'Proyectos ganadores' : 'Seguimiento de proyectos' }</h1>
    <h2 className='proyectos-subtitle'>{stage === 'votacion' ? 'Acá podes encontrar los proyectos ganadores de 2018' : 'Acá podés encontrar los proyectos que fueron aprobados en votaciones anteriores y ver en qué estado de su ejecución se encuentran.'}</h2>
  </header>
)
