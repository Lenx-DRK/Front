import React from 'react'
import Busca from './Busca'
import ListaImagens from './ListaImagens'
//import { createClient } from 'pexels'
import PexelsLogo from './PexelsLogo'
import pexelsClient from '../utils/pexelsClient'
export default class App extends React.Component {

  state = {
    pics: []
  }


  //pexelsClient = null


  // onBuscaRealizada = (termo) => {
  //   this.pexelsClient.photos.search({
  //     query: termo
  //   })
  //     .then(pics => {
  //       console.log(pics)
  //       this.setState({ pics: pics.photos})
  //     })
  // }


  onBuscaRealizada = (termo) => {
    pexelsClient.get('/search', {
      params: {
        query: termo
      }
    })
    .then(result => {
      this.setState({pics: result.data.photos})
    })  
  }


  // componentDidMount() {
  //   this.pexelsClient = createClient('D9mcMRoGCNRdi0FTEgxCP906baAejGALXUHTijv7JS3mrTtZMcIjPKOK')
  // }


  render() {
    return (
      <div className='grid justify-content-center border-round border-1 border-400 w-9 m-auto p-3'>
        <div className="col-12">
          <PexelsLogo />
        </div>
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-8">
          <Busca
            onBuscaRealizada={this.onBuscaRealizada}
          />
        </div>
        <div className="col-8">
          <ListaImagens pics={this.state.pics}/>
        </div>
      </div>
    )
  }
}


//export default App