import './App.css';
import Statusbar from './components/Statusbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Forms from './components/Forms';
import CampoContato from './components/CampoContato/CampoContato';
import CardTxt from './components/dumb/CardTxt';
import CardImagem from './components/dumb/CardImagem';
import CardEndereco from './components/dumb/CardEndereco';
import Title from './components/dumb/Title';

function App() {
  return (
    <div className="App">
      <Statusbar show={true}/>
      <Navbar show={true}/>
      <Title show={true} fontSize="20px" texto={'FALE CONOSCO'} color={'#black'}/>
      <Forms show={false} backgroundColor="#ffce07" color="#000"/>
      <CampoContato show={true} imagem={'./imagens/instaWhite.png'} texto={'@breshop'}/>
      <CampoContato show={true} imagem={'./imagens/whatsapp.png'} texto={'(32)9xxxx-xxxx'}/>
      <CampoContato show={true} imagem={'./imagens/emailWhite.png'} texto={'breshop@gmail.com'}/>
      <CardImagem show={true} texto={'Bem-vind@ ao BreShopping!'}/>
      <CardTxt show={true} texto={'Seu app favorito para encontrar produtos de segunda mão com boa qualidade e naquele precinho ideal!'}/>
      <CardTxt show={true} texto={'Nós apenas direcionamos o consumidor ao vendedor, nossa plataforma não é proprietária de nenhum dos produtos.'}/>
      <CardEndereco show={true}/>




      <Footer show={true}/>
    </div>
  );
}

export default App;
