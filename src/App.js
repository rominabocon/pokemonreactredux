import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pokemon from './img/pokemonred.jpg'
// import CantidadPokemon from './components/cantidadPokemon';
// import CompraPokemon from './components/compraPokemon';
import store from './redux/store';
import {Provider} from 'react-redux'
import CompraPokemonHook from './Components/CompraPokemonHook';
import CantidadPokemonHook from './Components/CantidadPokemonHook'
import BuscadorPokemon from './Components/Buscador/BuscadorPokemon';
import ResultadoPokemon from './Components/Buscador/ResultadoPokemon';

function App() {

  return (

    <Provider store={store}>
    <div className="App">
      <div className='row'>
        <div className='col-12'>
          <div className='card mt-5' style={{maxWidth: '370px'}}>
            <div className='row no-gutters'>
              <div className='col-4'>
                <img src={pokemon} alt='pokemonRed' className='card-img'/>
              </div>
              <div className='col-8'>
                <div className='card-body'>
                  <div className='card-title h3 text-center'>
                    <CantidadPokemonHook/>
                  </div>
                  <CompraPokemonHook/> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 mt-4 border-top pt-3'>
          <BuscadorPokemon/>
        </div>
        <div className='col-12'>
          <ResultadoPokemon/>
        </div>
      </div>
    </div>
    </Provider>

  );
}

export default App;
