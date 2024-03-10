import React, { useState } from 'react';
import { Button, IconButton, Modal, ModalHeader, ModalBody, ModalFooter, Typography } from 'components';
import { CloseIcon } from 'icons';
import { Article, Section, PreviewCode, PreviewCombo } from '../../../../components';

const previewModals = {
  default: 'default',
  breakpointSize: 'breakpointSize',
  fullScreen: 'fullScreen',
  scrollBody: 'scrollBody',
  scrollPaper: 'scrollPaper',
} as const;

const previewModalDefaults = {
  [previewModals.default]: false,
  [previewModals.breakpointSize]: false,
  [previewModals.fullScreen]: false,
  [previewModals.scrollBody]: false,
  [previewModals.scrollPaper]: false,
};

const PreviewView = () => {
  const [modal, setModal] = useState(Object.assign(previewModalDefaults));

  // const openModal = (key: keyof typeof previewModals) => {
  //   const state = Object.assign({ ...modal });
  //   state[key] = true;
  //   setModal(state);
  // };
  const closeModal = (key: keyof typeof previewModals) => {
    const state = Object.assign({ ...modal });
    state[key] = false;
    setModal(state);
  };
  const toggleModal = (key: keyof typeof previewModals) => {
    const state = Object.assign({ ...modal });
    state[key] = !state[key];
    setModal(state);
  };

  return (
    <>
      <Section>
        <PreviewCode code={`import { Modal, ModalHeader, ModalBody, ModalFooter } from 'components';`} />
      </Section>
      <Article>
        <Section title="Basics">
          <PreviewCombo
            code={`<Modal>
    <ModalHeader />
    <ModalBody>...</ModalBody>
    <ModalFooter>...</ModalFooter>
</Modal>`}
          >
            <Button onClick={() => toggleModal(previewModals.default)}>Open Modal</Button>
          </PreviewCombo>
        </Section>
      </Article>
      <Article
        title="Modal size"
        subtitle={`For Modal, we can set the same width as Container, or expand it to the full width and height of the window.`}
      >
        <Section title="Breakpoint">
          <PreviewCombo code={`<Modal maxWidth="sm">...</Modal>`}>
            <Button onClick={() => toggleModal(previewModals.breakpointSize)}>Open Modal</Button>
          </PreviewCombo>
        </Section>
        <Section title="Fullscreen">
          <PreviewCombo code={`<Modal isFullscreen>...</Modal>`}>
            <Button onClick={() => toggleModal(previewModals.fullScreen)}>Open Modal</Button>
          </PreviewCombo>
        </Section>
      </Article>
      <Article
        title="Modal scroll behavior"
        subtitle={`Content overflow properties can also be adjusted, whether the content or the entire page will scroll.`}
      >
        <Section title="Body scroll">
          <PreviewCombo code={`<Modal scroll="body">...</Modal>`}>
            <Button onClick={() => toggleModal(previewModals.scrollBody)}>Open Modal</Button>
          </PreviewCombo>
        </Section>
        <Section title="Paper scroll">
          <PreviewCombo code={`<Modal scroll="paper">...</Modal>`}>
            <Button onClick={() => toggleModal(previewModals.scrollPaper)}>Open Modal</Button>
          </PreviewCombo>
        </Section>
      </Article>

      <Modal isOpen={modal.default} onClose={() => closeModal(previewModals.default)}>
        <ModalHeader
          title="Modal default"
          actions={
            <IconButton onClick={() => toggleModal(previewModals.default)}>
              <CloseIcon />
            </IconButton>
          }
        />
        <ModalBody>Modal Body</ModalBody>
        <ModalFooter>
          <Button onClick={() => toggleModal(previewModals.default)} variant="outlined" color="neutral">
            Close Modal
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modal.breakpointSize} onClose={() => closeModal(previewModals.breakpointSize)} maxWidth="sm">
        <ModalHeader
          title="Modal title"
          actions={
            <IconButton onClick={() => toggleModal(previewModals.breakpointSize)}>
              <CloseIcon />
            </IconButton>
          }
        />
        <ModalBody>Modal Body</ModalBody>
        <ModalFooter>
          <Button onClick={() => toggleModal(previewModals.breakpointSize)} variant="outlined" color="neutral">
            Close Modal
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modal.fullScreen} onClose={() => closeModal(previewModals.fullScreen)} isFullscreen>
        <ModalHeader
          title="Modal full screen"
          actions={
            <IconButton onClick={() => toggleModal(previewModals.fullScreen)}>
              <CloseIcon />
            </IconButton>
          }
        />
        <ModalBody>Modal Body</ModalBody>
        <ModalFooter>
          <Button onClick={() => toggleModal(previewModals.fullScreen)} variant="outlined" color="neutral">
            Close Modal
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modal.scrollBody} onClose={() => closeModal(previewModals.scrollBody)} scroll="body">
        <ModalHeader
          title="Modal body scroll"
          actions={
            <IconButton onClick={() => toggleModal(previewModals.scrollBody)}>
              <CloseIcon />
            </IconButton>
          }
        />
        <ModalBody>
          <Typography>
            Sodales enim in, pulvinar varius felis scelerisque purus donec lorem tortor, nibh maximus nibh maximus
            aliquet dolor sit amet. Condimentum dui, ultricies augue congue ut id ante suscipit integer justo, venenatis
            adipiscing scelerisque dui. Nulla ligula, elit euismod et vehicula ante bibendum magna et sed id tortor,
            maximus venenatis duis id integer. Vestibulum augue, facilisis rutrum venenatis proin mattis ollicitudin
            iaculis, et nisi molestie pellentesque quam. Sed vestibulum, non nulla ac hendrerit tellus congue
            suspendisse imperdiet sed porttitor, non mauris sodales aliquam lorem fringilla. Ornare sollicitudin, sit
            amet ut nibh imperdiet euismod aliquam lectus, bibendum posuere sem lobortis porttitor.
            <br />
            Ornare suspendisse, euismod donec odio ultricies proin viverra sapien, tempus a libero sapien lorem. Felis a
            accumsan, tempus quis orci libero ultricies dui vel dolor maximus dui, mauris a sapien donec. Ollicitudin
            vitae, duis id vitae augue congue dui integer molestie, ollicitudin bibendum sollicitudin lectus.
            Suspendisse vitae, nulla nunc ultricies iaculis volutpat dignissim a, elit aliquet odio leo proin. Odio leo
            turpis, quis odio quis nulla lorem ipsum dolor sit amet aliquam molestie lacinia, augue vivamus condimentum
            felis a. Congue imperdiet, ac nibh vestibulum magna et at sem neque curabitur aliquam, dignissim ultrices
            tortor quisque.
            <br />
            Ut hendrerit lorem fringilla, quam purus sapien pulvinar vehicula et nisi mauris, aliquet nisl vel purus
            iaculis nec. Nibh maximus consectetur, felis scelerisque mattis curabitur nunc vel sem lobortis sed ac,
            lectus accumsan consectetur ac nibh. Pulvinar donec, euismod enim in non congue morbi sit amet nullam
            sapien, aliquet et diam a vehicula. Dui vel arcu, varius cursus cras dictum nunc ut enim et phasellus quam
            tristique, mollis praesent libero sed enim in. Ut dignissim, metus a lorem consequat purus iaculis feugiat
            facilisis maximus, augue elit finibus in nisi. Posuere non mauris, aliquet pretium accumsan sagittis quam
            lorem ipsum dolor sit amet quis sollicitudin, condimentum eget porta laoreet.
          </Typography>
          <Typography>
            Condimentum metus a lorem, sapien ornare risus rhoncus at sem ut id ante consequat, elit bibendum iaculis
            libero. Sem enim in, egestas ullamcorper suspendisse rhoncus erat fusce gravida odio libero, elementum
            sollicitudin aliquam feugiat. Vehicula consectetur, aenean lacinia risus donec et a arcu, euismod libero sed
            id tortor integer. Imperdiet molestie, ligula vel arcu sit amet condimentum bibendum volutpat vivamus,
            sapien neque nullam porttitor. Ligula neque, libero dui vel dolor iaculis nam dolor quis suspendisse felis
            scelerisque, porttitor auctor ligula et nisl. Eget tortor, porta aliquet varius quis odio sem lobortis et
            nisi ultricies, tortor facilisis magna et nec.
            <br />
            Quis volutpat, volutpat placerat lorem ipsum lacinia vel arcu fermentum varius, purus tortor scelerisque a
            lacinia. Venenatis non, molestie vestibulum non mauris egestas ut hendrerit congue curabitur, dui vel dolor
            efficitur fringilla neque. Vivamus fusce ante, consectetur nulla quis adipiscing sapien sollicitudin
            suscipit, pharetra ante at commodo. Nibh ligula, lectus integer ligula sit amet venenatis libero vitae
            suspendisse, vivamus nulla posuere vehicula. Porttitor proin, et nisi curabitur tellus purus quam libero
            vitae elementum luctus, bibendum luctus quam leo vitae. Sed ac eget, adipiscing imperdiet nisl aliquet
            pulvinar ultricies quis, ullamcorper dui et tempus donec consequat.
          </Typography>
          <Typography>
            Condimentum metus a lorem, sapien ornare risus rhoncus at sem ut id ante consequat, elit bibendum iaculis
            libero. Sem enim in, egestas ullamcorper suspendisse rhoncus erat fusce gravida odio libero, elementum
            sollicitudin aliquam feugiat. Vehicula consectetur, aenean lacinia risus donec et a arcu, euismod libero sed
            id tortor integer. Imperdiet molestie, ligula vel arcu sit amet condimentum bibendum volutpat vivamus,
            sapien neque nullam porttitor. Ligula neque, libero dui vel dolor iaculis nam dolor quis suspendisse felis
            scelerisque, porttitor auctor ligula et nisl. Eget tortor, porta aliquet varius quis odio sem lobortis et
            nisi ultricies, tortor facilisis magna et nec.
            <br />
            Quis volutpat, volutpat placerat lorem ipsum lacinia vel arcu fermentum varius, purus tortor scelerisque a
            lacinia. Venenatis non, molestie vestibulum non mauris egestas ut hendrerit congue curabitur, dui vel dolor
            efficitur fringilla neque. Vivamus fusce ante, consectetur nulla quis adipiscing sapien sollicitudin
            suscipit, pharetra ante at commodo. Nibh ligula, lectus integer ligula sit amet venenatis libero vitae
            suspendisse, vivamus nulla posuere vehicula. Porttitor proin, et nisi curabitur tellus purus quam libero
            vitae elementum luctus, bibendum luctus quam leo vitae. Sed ac eget, adipiscing imperdiet nisl aliquet
            pulvinar ultricies quis, ullamcorper dui et tempus donec consequat.
          </Typography>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => toggleModal(previewModals.scrollBody)} variant="outlined" color="neutral">
            Close Modal
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modal.scrollPaper} onClose={() => closeModal(previewModals.scrollPaper)}>
        <ModalHeader
          title="Modal paper scroll"
          actions={
            <IconButton onClick={() => toggleModal(previewModals.scrollPaper)}>
              <CloseIcon />
            </IconButton>
          }
        />
        <ModalBody>
          <Typography>
            Sodales enim in, pulvinar varius felis scelerisque purus donec lorem tortor, nibh maximus nibh maximus
            aliquet dolor sit amet. Condimentum dui, ultricies augue congue ut id ante suscipit integer justo, venenatis
            adipiscing scelerisque dui. Nulla ligula, elit euismod et vehicula ante bibendum magna et sed id tortor,
            maximus venenatis duis id integer. Vestibulum augue, facilisis rutrum venenatis proin mattis ollicitudin
            iaculis, et nisi molestie pellentesque quam. Sed vestibulum, non nulla ac hendrerit tellus congue
            suspendisse imperdiet sed porttitor, non mauris sodales aliquam lorem fringilla. Ornare sollicitudin, sit
            amet ut nibh imperdiet euismod aliquam lectus, bibendum posuere sem lobortis porttitor.
            <br />
            Ornare suspendisse, euismod donec odio ultricies proin viverra sapien, tempus a libero sapien lorem. Felis a
            accumsan, tempus quis orci libero ultricies dui vel dolor maximus dui, mauris a sapien donec. Ollicitudin
            vitae, duis id vitae augue congue dui integer molestie, ollicitudin bibendum sollicitudin lectus.
            Suspendisse vitae, nulla nunc ultricies iaculis volutpat dignissim a, elit aliquet odio leo proin. Odio leo
            turpis, quis odio quis nulla lorem ipsum dolor sit amet aliquam molestie lacinia, augue vivamus condimentum
            felis a. Congue imperdiet, ac nibh vestibulum magna et at sem neque curabitur aliquam, dignissim ultrices
            tortor quisque.
            <br />
            Ut hendrerit lorem fringilla, quam purus sapien pulvinar vehicula et nisi mauris, aliquet nisl vel purus
            iaculis nec. Nibh maximus consectetur, felis scelerisque mattis curabitur nunc vel sem lobortis sed ac,
            lectus accumsan consectetur ac nibh. Pulvinar donec, euismod enim in non congue morbi sit amet nullam
            sapien, aliquet et diam a vehicula. Dui vel arcu, varius cursus cras dictum nunc ut enim et phasellus quam
            tristique, mollis praesent libero sed enim in. Ut dignissim, metus a lorem consequat purus iaculis feugiat
            facilisis maximus, augue elit finibus in nisi. Posuere non mauris, aliquet pretium accumsan sagittis quam
            lorem ipsum dolor sit amet quis sollicitudin, condimentum eget porta laoreet.
          </Typography>
          <Typography>
            Condimentum metus a lorem, sapien ornare risus rhoncus at sem ut id ante consequat, elit bibendum iaculis
            libero. Sem enim in, egestas ullamcorper suspendisse rhoncus erat fusce gravida odio libero, elementum
            sollicitudin aliquam feugiat. Vehicula consectetur, aenean lacinia risus donec et a arcu, euismod libero sed
            id tortor integer. Imperdiet molestie, ligula vel arcu sit amet condimentum bibendum volutpat vivamus,
            sapien neque nullam porttitor. Ligula neque, libero dui vel dolor iaculis nam dolor quis suspendisse felis
            scelerisque, porttitor auctor ligula et nisl. Eget tortor, porta aliquet varius quis odio sem lobortis et
            nisi ultricies, tortor facilisis magna et nec.
            <br />
            Quis volutpat, volutpat placerat lorem ipsum lacinia vel arcu fermentum varius, purus tortor scelerisque a
            lacinia. Venenatis non, molestie vestibulum non mauris egestas ut hendrerit congue curabitur, dui vel dolor
            efficitur fringilla neque. Vivamus fusce ante, consectetur nulla quis adipiscing sapien sollicitudin
            suscipit, pharetra ante at commodo. Nibh ligula, lectus integer ligula sit amet venenatis libero vitae
            suspendisse, vivamus nulla posuere vehicula. Porttitor proin, et nisi curabitur tellus purus quam libero
            vitae elementum luctus, bibendum luctus quam leo vitae. Sed ac eget, adipiscing imperdiet nisl aliquet
            pulvinar ultricies quis, ullamcorper dui et tempus donec consequat.
          </Typography>
          <Typography>
            Condimentum metus a lorem, sapien ornare risus rhoncus at sem ut id ante consequat, elit bibendum iaculis
            libero. Sem enim in, egestas ullamcorper suspendisse rhoncus erat fusce gravida odio libero, elementum
            sollicitudin aliquam feugiat. Vehicula consectetur, aenean lacinia risus donec et a arcu, euismod libero sed
            id tortor integer. Imperdiet molestie, ligula vel arcu sit amet condimentum bibendum volutpat vivamus,
            sapien neque nullam porttitor. Ligula neque, libero dui vel dolor iaculis nam dolor quis suspendisse felis
            scelerisque, porttitor auctor ligula et nisl. Eget tortor, porta aliquet varius quis odio sem lobortis et
            nisi ultricies, tortor facilisis magna et nec.
            <br />
            Quis volutpat, volutpat placerat lorem ipsum lacinia vel arcu fermentum varius, purus tortor scelerisque a
            lacinia. Venenatis non, molestie vestibulum non mauris egestas ut hendrerit congue curabitur, dui vel dolor
            efficitur fringilla neque. Vivamus fusce ante, consectetur nulla quis adipiscing sapien sollicitudin
            suscipit, pharetra ante at commodo. Nibh ligula, lectus integer ligula sit amet venenatis libero vitae
            suspendisse, vivamus nulla posuere vehicula. Porttitor proin, et nisi curabitur tellus purus quam libero
            vitae elementum luctus, bibendum luctus quam leo vitae. Sed ac eget, adipiscing imperdiet nisl aliquet
            pulvinar ultricies quis, ullamcorper dui et tempus donec consequat.
          </Typography>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => toggleModal(previewModals.scrollPaper)} variant="outlined" color="neutral">
            Close Modal
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default PreviewView;
