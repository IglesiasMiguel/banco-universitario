import Nav from "./components/Nav";
import ImageCard from './components/ImageCard';
import ImageCard2 from './components/ImageCard2';
const App = () => {
  return (
    <div>
      <Nav/>
      <ImageCard
        imageUrl="./src/assets/images/services1.png"
        title="Servicio eficiente"
        text="Brindar a los estudiantes universitarios un servicio eficiente y de calidad en la gestión de sus recursos financieros, a través de nuestros canales digitales y nuestros puntos de atención presencial."
        buttonText="Conócenos"
      />
      <ImageCard2
        imageUrl="./src/assets/images/services2.png"
        title="Educación financiera"
        text="Promover la educación financiera de los estudiantes universitarios, a través de charlas, talleres y capacitaciones sobre temas como el ahorro, la inversión y el uso responsable del crédito"
        buttonText="Conócenos"
      />
    </div>
  );
};

export default App;
