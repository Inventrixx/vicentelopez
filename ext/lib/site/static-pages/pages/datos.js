import React, {Component} from 'react'
import Footer from   'ext/lib/site/footer/component'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'
import Proyectos from 'ext/lib/site/proyectos/component'
import CarruselAnios from 'ext/lib/site/carrusel-anios/component'
import Anchor from 'ext/lib/site/anchor'

export default class Page extends Component {
  componentDidMount () {
    Anchor.goTo('container')
  }

  render () {
    return (
      <div>
        <BannerForoVecinal title="Los foros en datos"/>
        <Anchor id='container'>
          <div className='ext-datos'>
            <div className="text">
              El presupuesto participativo de Vicente López se viene haciendo de manera ininterrumpida desde el 2012. Aquí encontrarás información y datos históricos de todas las ediciones de Foros Vecinales.
            </div>
            <h3>Proyectos por año</h3>
            <div className="seccion-datos">
              <div className="graph-box">
                <img className="graph" src="/ext/lib/site/static-pages/progreso-proyectos.svg" alt=""/>
              </div>
              <div className="text">
                Evolución de cantidad de proyectos presentados, aprobados y ejecutados año a año.
                <img className="graph-ref" src="/ext/lib/site/static-pages/progreso-proyectos-ref.png" alt=""/>
              </div>
            </div>
            <h3>Cantidad de proyectos por año por categoría</h3>
            <div className="seccion-datos">
              <div className="graph-box">
                <img className="graph" src="/ext/lib/site/static-pages/progreso-proyectos-por-tipo.svg" alt=""/>
              </div>
              <div className="text">
                Evolución en el tiempo de cantidad de proyectos por categoría (cultura, deporte, educación, fiscalizacion, gobierno, planeamiento, salud, seguridad y tránsito).
                <img className="graph-ref" src="/ext/lib/site/static-pages/progreso-proyectos-por-tipo-ref.svg" alt=""/>
              </div>
            </div>

            <h3>Distribución de proyectos por categoría</h3>
            <div className="graph-box">
              <CarruselAnios />
            </div>
            <div className="text">
              Visualización por año de la distribución de proyectos por categoría (cultura, deporte, educación, fiscalizacion, gobierno, planeamiento, salud, seguridad y tránsito).
            </div>


            <h3>Evolución de la participación</h3>
            <div className="seccion-datos">
              <div className="graph-box">
                <img className="graph" src="/ext/lib/site/static-pages/evolucion-participacion.svg" alt=""/>
              </div>
              <div className="text">
                Evolución de ciudadanos (porcentaje de la población de Vicente López) que han participado en los foros vecinales de Vicente López.
              </div>
            </div>
            <div className='descargas'>
              <h4>DESCARGAS</h4>
              <div className="btns-descargas">
                <a target='_blank' href='https://rosariociudaddemocracyos.blob.core.windows.net/assets/informacion-sobre-participantes.xlsx' className='boton-azul'>Proyectos 2012-2017 por tipo (cantidad e inversión)</a>
                <a target='_blank' href='https://rosariociudaddemocracyos.blob.core.windows.net/assets/proyectos-2012-2017-por-tipo.xlsx' className='boton-azul'>Información sobre participación</a>
              </div>
            </div>
          </div>
        </Anchor>
        <Footer />
      </div>
    )
  }
}
