
import { FaPhone } from 'react-icons/fa';
import { AiOutlineMail, AiFillHome, AiOutlineLinkedin } from 'react-icons/ai';
function App() {


  return (
    <div className="main-container">
      <div className="container">
        <div className="container-items">
          <h1 >Gustavo Shiose</h1>
          <h2 >Desenvolvedor Python</h2>
          <div className='container-top'>
            <ul className='lista'>
              <li><FaPhone/>  Telefone: (11) 11111-1111</li>
              <li><AiOutlineMail/>  Email:example@email.com</li>
              <li><AiFillHome/>  Endereço: São Paulo(SP)</li>
              <li><a href="https://www.linkedin.com/in/gustavo-shiose-3806a81a2/"><AiOutlineLinkedin/>  LinkedIn</a></li>
            </ul>
            <a href="https://www.linkedin.com/in/gustavo-shiose-3806a81a2/"><img className="fotoPerfil" width="205" height="205" src="src\assets\images\foto_corporativaRed.jpg" alt="foto de perfil" /></a>
          </div>
          <div className="conteudo">
            <h3>Descrição </h3>
            <p>Estudante de Engenharia da Computação, com experiência em desenvolvimento de projetos de Inteligência
                Artificial utilizando Metodologias Ágeis
                nos processos. </p>

          <div>
            <h4> Experiência</h4>
              <ul>
                <li>Estagiário Tech-Speed Fi-Group - 2023</li>

              </ul>
          </div>
          <div>
              <h4> Formação</h4>
              <ul>
                  <li>Graduação Engenharia da Computação - Fiap (8°Período)</li>
                  <li>Cisco CCNA - Introduction to Networks</li>
                  <li>Formação HTML5 e CSS - Alura</li>
                  <li>Formação C# - Alura</li>
                  <li>Formação Machine Learning - Alura</li>

              </ul>
          </div>
          <div>
              <h4> Hard Skills</h4>
              <ul>
                  <li>Desenvolvimento C#</li>
                  <li>Python com foco em Iteligência Artificial</li>
                  <li>MySql e SQL Oracle</li>
                  <li>POO em JavaScript</li>
                  <li>UX e UI</li>
                  <li>Métodos de Scrum</li>

              </ul>
          </div>
          <div>
              <h4> Soft Skills</h4>
              <ul>
                  <li>Proatividade</li>
                  <li>Comunicativo, bom trabalho em equipe</li>
                  <li>Rápido Aprendizado e Adaptação</li>

              </ul>
          </div>

      </div>
    </div>
  </div>
</div>
  )
}

export default App
