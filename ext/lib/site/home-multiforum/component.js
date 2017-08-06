import React, { Component } from 'react'
import {Link} from 'react-router'
import config from 'lib/config'
import Footer from 'ext/lib/site/footer/component'
import Barrios from 'ext/lib/site/barrios/component'
import ForosEnDatos from 'ext/lib/site/foros-en-datos/component'
import ThumbsVoto from 'ext/lib/site/thumbs-voto/component'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'
import Proyectos from 'ext/lib/site/proyectos/component'
import forumStore from 'lib/stores/forum-store/forum-store'
import topicStore from 'lib/stores/topic-store/topic-store'
import Anchor from 'ext/lib/site/anchor'

export default class HomeMultiforumOverride extends Component {
  constructor(props){
    super(props)
    this.state = {
      forums: null
    }
  }

  componentWillMount () {
    forumStore.findAll().then((forums) => {
      this.setState({ forums: forums })
    })
  }

  componentDidMount () {
    Anchor.goTo('container')
  }

  render () {
    const { topics, forums } = this.state
    return (
      <div className='ext-home-multiforum'>
        <Anchor id='container'>
          <BannerForoVecinal />
          <ThumbsVoto />
          <Proyectos />
          <ForosEnDatos />
          <Barrios forums={forums}/>
          <Footer />
        </Anchor>
      </div>
    )
  }
}
