import React, { useState } from 'react';
// import { useKireiContext } from 'styles';
import { Button, Stack, Modal, ModalHeader, ModalBody, ModalFooter } from 'components';
import { Article, Section } from '../../../../components';

const PreviewView = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSecondaryOpen, setModalSecondaryOpen] = useState(false);
  const [modalTertiaryOpen, setModalTertiaryOpen] = useState(false);

  // const { theme } = useKireiContext();

  const modalToggle = () => setModalOpen(!modalOpen);
  const modalSecondaryToggle = () => setModalSecondaryOpen(!modalSecondaryOpen);
  const modalTertiaryToggle = () => setModalTertiaryOpen(!modalTertiaryOpen);

  return (
    <Article>
      <Section title="Modal default">
        <Stack gap={2}>
          <Button onClick={modalToggle}>Open Modal</Button>
          <Button onClick={() => setModalTertiaryOpen(true)}>Open Tertiary</Button>
        </Stack>

        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} disableBackdropClose>
          <ModalHeader title="Modal title" subtitle="Modal subtitle" divider />
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
          <ModalFooter>
            <Button onClick={modalToggle} variant="outlined" color="neutral">
              Close Modal
            </Button>
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
      </Section>
    </Article>
  );
};

export default PreviewView;
