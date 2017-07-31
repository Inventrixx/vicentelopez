import React from 'react'
import Footer from   'ext/lib/site/footer/component'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'

export default function Page () {
  document.body.scrollTop = 0
  return (
    <div>
      <BannerForoVecinal />
      <div className='ext-acerca-de container'>
        <div className="filas">
          <div className="fila con-icono">
            <div className="cols col-1">
              <div>
                <div className="thumbs">
                  <div className="que-son"></div>
                </div>
                <h2>¿Qué son?</h2>
              </div>
            </div>
            <div className="cols col-2">
              <div>
                Son espacios de participación ciudadana donde los vecinos deciden en que invertir parte del presupuesto municipal. Todos los años desde hace 5 años se asigna y comunica una partida por barrio para la ejecución de estos proyectos.
              </div>
            </div>
          </div>
          <div className="fila con-icono">
            <div className="cols col-1">
              <div>
                <div className="thumbs">
                  <div className="como-voto"></div>
                </div>
              </div>
              <h2>¿Cómo voto?</h2>
            </div>
            <div className="cols col-2">
              <div>
                Cualquier mayor de 16 años que viva o trabaje en vicente lopez podrá votar desde el XXX hasta el XXX en todas las urnas habilitadas.
              </div>
            </div>
          </div>
          <div className="fila con-icono">
            <div className="cols col-1">
              <div className="thumbs">
                <div className="donde-voto"></div>
              </div>
              <h2>¿Dónde voto?</h2>
            </div>
            <div className="cols col-2">
              <div>
                Encontrarás urnas habilitadas para votar en los 9 barrios de Vicente Lopez: Munro , Florida Oeste , Carapachay, La Lucila, Olivos , Villa Martilli, Florida Este, Vicente Lopez y Villa Adelina.
              </div>
            </div>
          </div>
          <div className="fila faq">
            <h3>¿CÓMO SE DISTRIBUYE EL DINERO POR BARRIO?</h3>
            <p>La partida de este año (presupuesto 2018) se repartió en parte de manera igualitaria en los 9 barrios ($31,5 millones) y en parte ($33,5 millones) teniendo en cuenta la cantidad de habitantes de cada barrio para lo cual se establecieron 3 franjas: hasta 20 mil, de 20 a 40 mil y más de 40 mil habitantes.</p>
            <h3>¿CÓMO SE ELABORARON LOS PROYECTOS?</h3>
            <p>En una serie de reuniones programadas (Foros Vecinales), los vecinos se encontraron con funcionarios municipales de cada área para presentarles ideas y propuestas para los barrios y en conjunto se definieron los proyectos.</p>
            <h3>¿CÓMO SE DECIDIERON LOS PROYECTOS VOTABLES?</h3>
            <p>Una vez presentado, cada proyecto fue verificado técnica y legalmente. El total de proyectos factibles se someterá a votación.</p>
            <h3>¿CÓMO SE DEFINEN LOS PROYECTOS GANADORES?</h3>
            <p>Los proyectos más votados de cada barrio que no superen el monto asignado serán ejecutados el año que viene.</p>
          </div>
          <div className="fila no-bg">
            <div className="map-box">
              <div className='mapa'>
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1DEX8V6qaMQy-8NYKNPhsLH_xQnY" width="640" height="480"></iframe>
              </div>
            </div>
            <div className="delegaciones-head">
              <h3>Horarios de las delegaciones</h3>
              <p>Estarán abiertas de 8:30hs a 16hs de lunes a viernes. Las urnas serán atendidas por personal de cada delegación</p>
            </div>
            <div className="delegaciones">
              <div>
                <span>Delegación Carapachay</span>
                <span>Delegado: Juan Antonio Gentiluomo</span>
                <span>Dirección: Ascasubi 5702, Carapachay</span>
                <span>Teléfono: 4756-3098</span>
                <span>Mail: delegacion.carapachay@vicentelopez.gov.ar</span>
              </div>
              <div>
                <span>Delegación Florida Central</span>
                <span>Delegado: Susana Mabel Orue, Florida</span>
                <span>Dirección: V. Vergara 2382</span>
                <span>Teléfono: 4796-3894/ 4718-1991</span>
                <span>Mail: delegacion.florida@vicentelopez.gov.ar</span>
              </div>
              <div>
                <span>Delegación Florida Oeste</span>
                <span>Delegado: Juan Marandola</span>
                <span>Dirección: San Martin 4106, Florida Oeste</span>
                <span>Teléfono: 4760-5896/ 4760-9268</span>
                <span>Mail: delegacion.floridao@vicentelopez.gov.ar</span>
              </div>
              <div>
                <span>Delegación La Loma de Roca (Olivos)</span>
                <span>Delegado: Rocío Suarez</span>
                <span>Dirección: Uzal 3620, Olivos</span>
                <span>Teléfono: 4519-2137/ 4519-2138</span>
                <span>Mail: delegacion.laloma@vicentelopez.gov.ar</span>
              </div>
              <div>
                <span>Delegación La Lucila</span>
                <span>Delegado: Laura Caramella</span>
                <span>Dirección: Anchorena 721, La Lucila</span>
                <span>Teléfono: 4790-8264/ 4711-0704</span>
                <span>Mail: delegacion.lalucila@vicentelopez.gov.ar</span>
              </div>
              <div>
                <span>Delegación Munro</span>
                <span>Delegado: Héctor Cioncio</span>
                <span>Dirección: Vélez Sarsfield 4839, Munro</span>
                <span>Teléfono: 4762-1204</span>
                <span>Mail: delegacion.munro@vicentelopez.gov.ar</span>
              </div>
              <div>
                <span>Delegación Villa Adelina</span>
                <span>Delegado: Ester Lanzalot</span>
                <span>Dirección: Av. Ader 4057, Villa Adelina</span>
                <span>Teléfono: 4763-7727</span>
                <span>Mail: delegacion.adelina@vicentelopez.gov.ar</span>
              </div>
              <div>
                <span>Delegación Villa Martelli</span>
                <span>Delegado: Katia Seguín</span>
                <span>Dirección: Laprida 3902, Villa Martelli</span>
                <span>Teléfono: 4709-5775/ 4709-1144</span>
                <span>Mail: delegacion.martelli@vicentelopez.gov.ar</span>
              </div>
              <div>
                <span>Delegación Puente Saavedra</span>
                <span>Delegado: José Luis Ruiz</span>
                <span>Dirección: Av. Maipú 130, Florida</span>
                <span>Teléfono: 4791-2011 / 5194-4327</span>
                <span>Mail: delegacion.saavedra@vicentelopez.gov.ar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
