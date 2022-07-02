import Myfoto from './Eu.jpeg';
function Apresenta() {


    return (
        <>

        <div className="text-foto">
        <img className="foto" src={Myfoto} alt="Minha-foto" />
        <div className="text-apres">
        <h1> Olá! 👋 me chamo <span>Leticia Coelho</span></h1>
        <p className='parag-apres'>Sou Aluna da Reprograma, turma ON17, e 
            essa semana estou desenvolvendo projetos em React 
            assim, como esse site que está sendo criado,
            venha ver como me sinto, ao logo desses apredizados. 
        </p>  
        </div>
        </div>

        </>
      
   
    )
  }
  
  export default Apresenta