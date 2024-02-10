import React, { useState } from 'react';
// import { useUiContext } from 'styles';
import { Button, ModalDialog } from 'components';
import { Article, Section } from '../../../../components';

const PreviewView = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSecondaryOpen, setModalSecondaryOpen] = useState(false);

  // const { theme } = useUiContext();

  const modalToggle = () => setModalOpen(!modalOpen);
  const modalSecondaryToggle = () => setModalSecondaryOpen(!modalSecondaryOpen);

  return (
    <Article>
      <Section title="Modal Dialog default">
        <div>
          <Button onClick={modalToggle}>Open Modal</Button>
        </div>
        <ModalDialog isOpen={modalOpen} onClose={modalToggle}>
          Modal content ...
          <div>
            <Button onClick={modalSecondaryToggle}>Open Modal</Button>
            <ModalDialog isOpen={modalSecondaryOpen} onClose={modalSecondaryToggle}>
              Modal content ...
            </ModalDialog>
          </div>
        </ModalDialog>
      </Section>
    </Article>
  );
};

export default PreviewView;
