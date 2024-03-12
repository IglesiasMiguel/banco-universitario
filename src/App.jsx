import Nav from "./components/Nav";
import ImageCard from './components/ImageCard';
import ImageCard2 from './components/ImageCard2';
import ListadoServicios from "./components/ListadoServicios";
import Cta from "./components/Cta";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {

  const serviciosData = [
    {
      icono: 'fa-money-bill-transfer',
      titulo: 'Transferencias',
      descripcion: 'Servicio de transferencias entre estudiantes sin costo alguno',
    },
    {
      icono: 'fa-money-bill',
      titulo: 'Depósitos en efectivo',
      descripcion: 'Realiza depósitos en efectivo de manera sencilla  en cualquiera de nuestras sucursales',
    },
    {
      icono: 'fa-sack-dollar',
      titulo: 'Retiros en efectivo',
      descripcion: 'Realiza retiros en efectivo de manera rápida y segura',
    },
    {
      icono: 'fa-piggy-bank',
      titulo: 'Pago de matriculas',
      descripcion: 'Servicio de pago de matrícula estudiantil, paga tus matrículas de manera rápida y sencilla',
    },
    {
      icono: 'fa-school',
      titulo: 'Cobro de becas',
      descripcion: 'Cobra tus becas estudiantiles de manera sencilla y eficiente',
    },
    {
      icono: 'fa-clock',
      titulo: 'Soluciones ágiles',
      descripcion: 'Brindamos soluciones eficientes pensadas en tus necesidades',
    },
  ];
  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold my-10">Descubre nuestros servicios</h2>
        <p className="mt-2 text-lg my-10">Facilitamos la gestión de tus recursos y contribuimos a tu crecimiento económico y personal</p>
        <ListadoServicios servicios={serviciosData} />
      </div>
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
      <Testimonial
        nombre="Miguel Iglesias"
        cargo="Estudiante UCLA"
        texto="El Banco Universitario ha sido mi aliado financiero desde que ingresé a la universidad. Su enfoque en brindar soluciones financieras ágiles y eficientes realmente se refleja en la forma en que facilitan la gestión de mis recursos. La opción de transferencias entre estudiantes sin comisión ha simplificado mis transacciones, y la posibilidad de realizar depósitos y retiros en efectivo las 24 horas del día ha sido increíblemente conveniente."
        fotoUrl="./src/assets/images/services2.png"
      />
      <Cta 
      title="Crea una cuenta en nuestra banca en línea"
      buttonText="Registrarse"/>

      <Footer />
      
    </div>
  );
};

export default App;
