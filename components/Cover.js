import CoverContainer from './styled/Cover'
import Button from './styled/Button'

function Cover() {
  return (
    <CoverContainer>
      <div className="top">
        <span>WEDDING INVITAION</span>
        <h1>Syaprizal Basri</h1>
      </div>
      <div className="detail">
        <p>Yth. Bapak/Ibu/Saudara/i</p>
        <h4>Roni Saputra</h4>
        <p>
          Tanpa mengurangi rasa hormat, Kami mengundang Bapak/Ibu/Saudara/i
          untuk hadir di acara Pernikahan Kami.
        </p>
        <Button>Buka Undangan</Button>
      </div>
    </CoverContainer>
  )
}

export default Cover
