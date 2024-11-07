import { Card, Image, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Personagem } from '../../../../../interfaces/GetListaPersonagens';
import { BsGenderAmbiguous, BsHouseDoor, BsGeoAlt, BsPerson } from 'react-icons/bs';
import style from './index.module.scss';

export default function Item(personagem: Personagem) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className={style.personagemCard}>
        <a href={personagem.image} target='_blank' rel="noopener noreferrer" className='m-0 p-0'>
          <Image src={personagem.image} className={style.imagem} />
        </a>
        <h3 style={{ fontSize: 16, fontFamily: 'Freckle Face, sans-serif', color: '#FFCC00' }}>
          {personagem.name}
        </h3>
        <span>{personagem.status}</span>
        <Button
          onClick={handleShow}
          className={style.saberMaisButton}
        >
          Saber Mais
        </Button>
      </Card>

      <Modal show={show} onHide={handleClose} centered className="modal-lg">
        <Modal.Header closeButton style={{ backgroundColor: '#303030' }}>
          <Modal.Title style={{
            fontSize: 32,
            fontFamily: 'Freckle Face, sans-serif',
            color: '#FFCC00',
            textAlign: 'center',
            width: '100%'
          }}>
            {personagem.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={style.modalBody} style={{ backgroundColor: '#303030', color: 'white'}}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-7 mb-3'>
                <Image src={personagem.image} style={{ objectFit: 'cover', height: '100%', width: '100%', borderRadius: '12px' }} />
              </div>
              <div className='col-12 col-md-5 d-flex flex-column justify-content-center align-items-center'>

                <div className={style.cardDetail}>
                  <div className={style.cardIcon}>
                    <BsPerson style={{ color: '#303030', fontSize: 35 }} />
                  </div>
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h3 style={{ fontSize: 20, textAlign: 'center' }}>
                      {personagem.species}
                    </h3>
                  </div>
                </div>

                <div className={style.cardDetail}>
                  <div className={style.cardIcon}>
                    <BsGenderAmbiguous style={{ color: '#303030', fontSize: 35 }} />
                  </div>
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h3 style={{ fontSize: 20, textAlign: 'center' }}>
                      {personagem.gender}
                    </h3>
                  </div>
                </div>

                <div className={style.cardDetail}>
                  <div className={style.cardIcon}>
                    <BsHouseDoor style={{ color: '#303030', fontSize: 35 }} />
                  </div>
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h3 style={{ fontSize: 20, textAlign: 'center' }}>
                      {personagem.origin.name}
                    </h3>
                  </div>
                </div>

                <div className={style.cardDetail}>
                  <div className={style.cardIcon}>
                    <BsGeoAlt style={{ color: '#303030', fontSize: 35 }} />
                  </div>
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h3 style={{ fontSize: 20, textAlign: 'center' }}>
                      {personagem.location.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#303030'}}>
          <Button
            style={{ backgroundColor: '#9B30FF', color: 'white', borderColor:'#9B30FF' }} // Estilo personalizado
            onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}