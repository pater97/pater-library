import MultiImage from './multiimage/MultiImage';
import FlipCard from './flipcard/FlipCard';
import FlipCardFixed from './flipCardFixed/FlipCardFixed';
// bg
import BG from './assets/bg.png'

// immagini di esempio
const p1 = 'https://images.unsplash.com/photo-1669187737670-921c6137a033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
const p2 = 'https://images.unsplash.com/photo-1669175083263-260fe5c06939?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80'
const p3 = 'https://images.unsplash.com/photo-1669114415713-4afe08f367b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80'
const p4 = 'https://images.unsplash.com/photo-1669033584578-f3a9601fc6f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
// flipcard
const fp1 = 'https://images.unsplash.com/photo-1627734819947-ba884aea9801?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1517&q=80'
const fp2 = 'https://images.unsplash.com/photo-1626761191814-a9dc9efd085c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
function Preview() {
  return (
    <div style={{backgroundImage: `url(${BG})`}}>
      <h1 style={{textAlign:'center'}}>
        PATER LIBRARY EDIT BY GIUSEPPE PATERNOSTRO
      </h1>
      {/* multiimage */}
      <h2 style={{textAlign:'center'}}>
        multiimage:
      </h2>
      <p>
        inserire il componente iin un contenitore, il componete prenderà le misure di quest'ultimo,
        props disponibili: 
        bgColor: dà il colore tra le immagini
        PhotoNumber: se le foto sono più di tre fino a 5 indicarne il numero altrimenti si può omettere
      </p>
      <div style={{height:'600px',width:'50%',margin:'100px auto'}}>
        <MultiImage 
        PhotoNumber={4}
        photoOne={p1}
        photoTwo={p2}
        photoTrhee={p3}
        photoFour={p4}
        />
      </div>
      {/* flipcard */}
      <h2 style={{textAlign:'center'}}>
        flipcard:
      </h2>
      <p>
        inserire il componente iin un contenitore, il componete prenderà le misure di quest'ultimo,
        props disponibili: 
        photoOne e photoTwo indicano le due faccie del container
        N.B: SE L'ANIMAZIONE DOVESSE ESSERE COMPROMESSA SI PUO' UTILIZZARE LA VERSIONE A GRANDEZZA FISSA CHE NON DA PROBLEMI
      </p>
      <div style={{height:'800px',width:'50%',margin:'100px auto'}}>
        <FlipCard
        photoOne={fp1}
        photoTwo={fp2}
        />
      </div>
      {/* flipcard fixed */}
      <h2 style={{textAlign:'center'}}>
        flipcard fixed:
      </h2>
      <p>
        inserire il componente iin un contenitore che centra il componente, il componete ha delle misure fisse: 
        photoOne e photoTwo indicano le due faccie del container
      </p>
      <div style={{height:'800px',width:'50%',margin:'100px auto'}}>
        <FlipCardFixed
        photoOne={fp1}
        photoTwo={fp2}
        />
      </div>
    </div>
  );
}

export default Preview;
