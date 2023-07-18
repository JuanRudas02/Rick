

export default function Characters(props) {
  const {characters,setCharacters} = props;

  const resetCharacters = () =>{

      setCharacters(null);
  }

  return (
    <div className="characters">

      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}> Volver al home</span>
      <div className="container-characters">
        {characters.map((Characters,index)=>(
          <div className="character-container" key={index}> 
             <div> 

              <img src={Characters.image} alt={Characters.name} />

             </div>
              <div>
              <h3>{Characters.name}</h3> 
              <h6>{Characters.status === "Alive" ?(

                <>
                <span className="alive" />
                Alive
                </>
              ) :
                <>
                  <span className="dead" />
                  Dead
                </>
              
              }</h6>
              <p>
              <span className="text-gray"> Episodios: </span>
              <span>{Characters.episode.length}</span>
              </p>
              <p>
              <span className="text-gray"> Epecie: </span>
              <span>{Characters.species}</span>
              </p>
              </div>
              
          </div>

        ))} 


      </div>
      <span className="back-home" onClick={resetCharacters}>Regresar a la home </span>
      <h1 className="back-home">Esta pagina esta hecha por Juan Rudas </h1>
      <h1 className="back-home">Fecha: 17/07//2023 </h1>

    </div>
  )
}
