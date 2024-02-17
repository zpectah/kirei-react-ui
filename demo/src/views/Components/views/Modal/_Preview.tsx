import React, { useState } from 'react';
// import { useKireiContext } from 'styles';
import { Button, Stack, Modal, ModalHeader, ModalBody, ModalFooter } from 'components';
import { CloseIcon } from 'icons';
import { Article, Section } from '../../../../components';

const PreviewView = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSecondaryOpen, setModalSecondaryOpen] = useState(false);
  const [modalTertiaryOpen, setModalTertiaryOpen] = useState(false);
  const [modalScrollableOneOpen, setModalScrollableOneOpen] = useState(false);

  // const { theme } = useKireiContext();

  const modalToggle = () => setModalOpen(!modalOpen);
  const modalSecondaryToggle = () => setModalSecondaryOpen(!modalSecondaryOpen);
  const modalTertiaryToggle = () => setModalTertiaryOpen(!modalTertiaryOpen);
  const modalScrollableOneOpenToggle = () => setModalScrollableOneOpen(!modalScrollableOneOpen);

  return (
    <Article>
      <Section title="Modal default">
        <Stack gap={2}>
          <Button onClick={modalToggle}>Open Modal</Button>
          <Button onClick={() => setModalTertiaryOpen(true)}>Open Tertiary</Button>
          <Button color="secondary" onClick={() => setModalScrollableOneOpen(true)}>
            Open Scrollable
          </Button>
        </Stack>

        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} disableBackdropClose>
          <ModalHeader
            title="Modal title"
            subtitle="Modal subtitle"
            actions={
              <Button onClick={modalToggle} variant="text" color="neutral">
                <CloseIcon />
              </Button>
            }
          />
          <ModalBody disableOffset style={{ backgroundColor: 'red', padding: '3rem' }}>
            Content with disabled offset
          </ModalBody>
          <ModalBody>
            Modal content ...Body
            <br />
            <Button onClick={modalSecondaryToggle}>Open Modal</Button>
            <br />
            <Modal maxWidth="sm" isOpen={modalSecondaryOpen} onClose={() => setModalSecondaryOpen(false)}>
              <ModalHeader title="Modal content ...Header" />
              <ModalBody>
                Body
                <br />
                <Button onClick={() => setModalTertiaryOpen(true)}>Open Tertiary</Button>
                <br />
              </ModalBody>
              <ModalFooter>
                <Button onClick={modalSecondaryToggle} variant="outlined" color="neutral">
                  Close Modal
                </Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter divider>
            <Button onClick={modalToggle} variant="outlined" color="neutral">
              Close Modal
            </Button>
            <Button>Some confirm button</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalTertiaryOpen} onClose={() => setModalTertiaryOpen(false)} isFullscreen>
          <ModalHeader title="Modal title" subtitle="Modal subtitle" />
          <ModalBody>Body</ModalBody>
          <ModalFooter>
            <Button onClick={modalTertiaryToggle} variant="outlined" color="neutral">
              Close Modal
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalScrollableOneOpen} onClose={() => setModalScrollableOneOpen(false)} scroll="body">
          <ModalHeader
            title="Modal scrollable 1"
            actions={
              <Button onClick={modalScrollableOneOpenToggle} variant="text" color="neutral">
                <CloseIcon />
              </Button>
            }
            divider
          />
          <ModalBody>
            <p>
              Lectus commodo, sapien euismod curabitur aliquet nulla convallis ut venenatis, ipsum dui vel dolor
              sollicitudin facilisis. Egestas sed, bibendum sed vitae donec suspendisse tortor imperdiet pellentesque,
              lectus nisl aliquam libero sed. Venenatis neque, sed porttitor vitae euismod quam efficitur libero
              sollicitudin, feugiat ut venenatis proin viverra. Nullam commodo, mauris et quisque fusce gravida bibendum
              bibendum enim in, convallis nibh maximus sollicitudin rhoncus at. Nec ut nisl mauris, molestie fusce
              gravida in ex sem ut varius maximus pharetra, curabitur sit amet aliquet elementum. Lacinia sollicitudin,
              rhoncus iaculis ut nisl mauris curabitur justo nisi commodo condimentum, dui rhoncus erat quam auctor.
              <br />
              Praesent quam, integer hendrerit facilisis lorem fringilla egestas quam etiam, quam efficitur vel etiam.
              Aliquam phasellus, magna et cras dictum purus ultricies mauris vel in ex sem, pharetra nam ut nisl mauris
              arcu. Placerat molestie, ac nec et vel arcu odio aliquam ullamcorper nullam, eget faucibus elit purus.
              Nulla sollicitudin, suspendisse scelerisque volutpat egestas venenatis curabitur arcu, leo vitae ipsum
              aenean ultricies. Tellus hendrerit, tortor pulvinar imperdiet sit amet consectetur donec a, maximus libero
              sollicitudin sodales. Arcu nisi nunc, donec risus ut venenatis ultrices facilisis non varius, a fermentum
              vel arcu imperdiet.
              <br />
              Laoreet nec commodo, condimentum egestas et nisi proin interdum fusce vitae, sapien vitae quam et nisl.
              Lorem fringilla id, accumsan curabitur neque vivamus ultrices non congue lorem, donec metus mauris
              ultricies. A lacinia aliquam, magna justo molestie consequat pharetra non nulla donec, curabitur egestas
              dui et tempus rhoncus erat. Luctus sodales, donec iaculis ultricies donec et nisi semper porttitor, quis
              orci ut id ante nec vel. Et elit vel, potenti condimentum nunc nulla libero suspendisse aliquet, tortor et
              nisl interdum arcu. Aliquet risus, tellus vivamus fusce vitae nunc pretium accumsan id aliquam, mauris
              venenatis rutrum scelerisque.
              <br />
              Mauris vitae massa, enim vehicula tristique justo sapien potenti augue, quisque neque felis scelerisque
              odio morbi. Dolor sit amet vulputate, mauris ut hendrerit consequat porta imperdiet sollicitudin egestas,
              quis leo vitae ante nunc. Nullam vehicula, venenatis iaculis vehicula feugiat quam dolor sit amet tellus,
              dolor ut sollicitudin vestibulum nulla. Mauris mollis, eget aenean sollicitudin bibendum semper lorem
              ipsum vivamus, sollicitudin arcu mauris eu quam. Sollicitudin id, varius donec elit consequat adipiscing
              ipsum dui vel dolor, sodales suspendisse maximus molestie. Facilisis accumsan, a id non accumsan tincidunt
              nullam ipsum, eget venenatis commodo eget.
              <br />
              Ac nibh libero, rhoncus nec ultricies posuere diam a arcu semper, consectetur congue finibus quis
              interdum. Cras dictum pulvinar, pharetra elit ante arcu sit amet urna nunc ut enim et, nibh maximus justo
              elementum luctus sed porttitor. Rhoncus at sapien, ullamcorper tellus suscipit quam vestibulum cursus
              proin, aliquam ut id ante molestie neque. Suscipit ullamcorper, porttitor posuere hendrerit sit amet at
              sem commodo eget, nisl et dolor quis dignissim. Turpis aliquet, suscipit erat id turpis volutpat mauris
              bibendum turpis, bibendum lectus quis hendrerit integer. In donec vestibulum, curabitur commodo nulla
              suscipit a lacinia et iaculis suspendisse, bibendum imperdiet aliquam maximus.
              <br />
              Nec eget, tellus lectus consectetur nulla a ut nisl mauris non nulla phasellus, molestie venenatis
              vestibulum finibus quis. Venenatis enim in, sed id tortor quis orci in ex sem vitae massa dui condimentum
              ipsum, interdum congue nulla integer neque. Aenean nullam, mattis curabitur vitae massa vehicula ultrices
              nec commodo sapien, pulvinar aenean suscipit dui. Rhoncus erat nam, congue nulla in donec condimentum
              semper varius quam libero vitae, metus a lorem quis vulputate feugiat. Libero aliquam, urna sollicitudin
              rhoncus erat faucibus rhoncus erat mauris elementum luctus, vitae curabitur quis odio nec. Rutrum
              ullamcorper, donec venenatis feugiat bibendum semper integer auctor, elementum ornare dolor sit amet
              commodo.
            </p>
          </ModalBody>
          <ModalFooter divider>
            <Button onClick={modalScrollableOneOpenToggle} variant="outlined" color="neutral">
              Close Modal
            </Button>
            <Button>Some confirm button</Button>
          </ModalFooter>
        </Modal>
      </Section>
    </Article>
  );
};

export default PreviewView;
