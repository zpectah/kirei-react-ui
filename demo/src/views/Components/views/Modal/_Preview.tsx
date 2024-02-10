import React, { useState } from 'react';
// import { useUiContext } from 'styles';
import { Button, Stack, Modal, ModalHeader, ModalBody, ModalFooter } from 'components';
import { Article, Section } from '../../../../components';

const PreviewView = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSecondaryOpen, setModalSecondaryOpen] = useState(false);
  const [modalTertiaryOpen, setModalTertiaryOpen] = useState(false);

  // const { theme } = useUiContext();

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
          Modal content ...
          <br />
          <Button onClick={modalToggle} variant="outlined" color="neutral">
            Close Modal
          </Button>
          <br />
          <div>
            <Button onClick={modalSecondaryToggle}>Open Modal</Button>
            <Modal isOpen={modalSecondaryOpen} onClose={() => setModalSecondaryOpen(false)}>
              Modal content ...
              <br />
              <Button onClick={modalSecondaryToggle} variant="outlined" color="neutral">
                Close Modal
              </Button>
            </Modal>
          </div>
        </Modal>
        <Modal isOpen={modalTertiaryOpen} onClose={() => setModalTertiaryOpen(false)}>
          <ModalHeader>Header</ModalHeader>
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
