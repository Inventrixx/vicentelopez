import React from 'react'
import { Link } from 'react-router'

export default function ThumbsVoto (props) {
  return (
    <section className="thumbs info-landing">
      <div className="container-fluid">
        <div className="row cont fondo-azul">
          <div className="subtitulo">
            <h2>
              Presupuesto Participativo 2019
            </h2>
            <h3>Hasta el 31 de mayo inclusive tenés tiempo para presentar tus propuestas</h3>
            <Link
              to='/formulario-propuesta'
              className="boton-azul boton-blanco">
              Mandá tu propuesta
            </Link>
          </div>
        </div>
        <div className="row cont">
          <div className="col-md-4">
            <div
              className="que-son img-responsive  ">
            </div>
            <h2
              className="text-center">
                ¿Qué es?
            </h2>
            <p className="que-son-cont">
            El Presupuesto Participativo es una iniciativa que permite a cada uno de los vecinos de los 9 barrios del municipio proponer, debatir y decidir a través del voto en qué utilizar una parte del presupuesto municipal de inversión.
            </p>
          </div>

          <div className="col-md-4">
            <div
              className="que-propongo img-responsive  ">
            </div>
            <h2 className="text-center">¿Qué puedo proponer?</h2>
            <p className="que-propongo-cont">
            Ideas para mejorar tu barrio, tu institución o asociación en temas de espacio público, seguridad, tránsito, salud, educación, cultura y deportes. 
            {/* Podés subir propuestas desde donde quieras haciendo click <Link to='https://forosvecinales.vicentelopez.gov.ar/proyectos' className="">acá</Link> y participar de las reuniones de vecinos para conocer mejor del presupuesto participativo! */}
            Las propuestas pueden involucrar equipamiento o infraestructura pero no pueden incluir gastos en recursos humanos. ¡Podés subir propuestas desde el 19 de marzo hasta el 31 de mayo y participar de las <Link to="https://forosvecinales.vicentelopez.gov.ar/s/herramientas">reuniones de vecinos</Link> para conocer mejor del presupuesto participativo!
            </p>

          </div>

          <div className="col-md-4">
            <div
              className="como-sigo img-responsive  ">
            </div>
            <h2 className="text-center">
              ¿Cómo sigo los proyectos?
            </h2>
            <p className="donde-voto-cont">
            Podés seguir de forma fácil la evolución de los proyectos ganadores del presupuesto participativo de 2017 y 2018 y conocer su ejecución entrando acá: <Link to='/proyectos?stage=seguimiento' className="">Seguimiento proyectos</Link>
            </p>
          </div>

        </div>

        {/* <div
          className='row'>
          <div className='cont-boton-azul'>
            <Link to='/s/acerca-de' className="boton-azul">
                    Más información
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  )
}
