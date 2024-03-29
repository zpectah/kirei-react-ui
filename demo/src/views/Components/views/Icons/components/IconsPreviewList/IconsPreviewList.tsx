import React, { useMemo, useState, ComponentType } from 'react';
import { CloseIcon } from 'icons';
import { Modal, ModalHeader, ModalBody, Button, Paper, Typography } from 'components';
import { Section, PreviewCombo } from '../../../../../../components';

type IconProps = { label: string; node: ComponentType };

export interface IconsPreviewListProps {
  onSelect?: (icon: IconProps) => void;
  iconsList: IconProps[];
}

const IconsPreviewList = (props: IconsPreviewListProps) => {
  const { onSelect, iconsList = [] } = props;

  const [modalOpen, setModalOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState<IconProps | undefined>(undefined);

  const openModalHandler = (icon: IconProps) => {
    setModalOpen(true);
    setActiveIcon(icon);
    if (onSelect) onSelect(icon);
  };
  const closeModalHandler = () => {
    setModalOpen(false);
    setActiveIcon(undefined);
  };

  const renderIconDetail = useMemo(() => {
    if (activeIcon) {
      const iconName = `${activeIcon.label}Icon`;
      const iconNameImport = `import { ${iconName} } from "icons";`;
      const IconNode = activeIcon.node;

      return (
        <>
          <ModalHeader
            title={activeIcon.label}
            actions={
              <Button onClick={closeModalHandler} variant="text" color="neutral">
                <CloseIcon />
              </Button>
            }
          />
          <ModalBody>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
              <PreviewCombo code={iconNameImport} stackProps={{ gap: 10 }}>
                <div style={{}}>
                  <IconNode />
                </div>
                <div style={{ fontSize: '1.5rem' }}>
                  <IconNode />
                </div>
                <div style={{ fontSize: '3rem' }}>
                  <IconNode />
                </div>
              </PreviewCombo>
            </div>
          </ModalBody>
        </>
      );
    }
  }, [activeIcon]);

  return (
    <>
      <Section>
        <div
          style={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '0',
          }}
        >
          {iconsList.map((icon) => (
            <div key={icon.label} style={{ width: '20%', minHeight: '150px', padding: '.5rem' }}>
              <Paper
                onClick={() => openModalHandler(icon)}
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                }}
                elevation={1}
              >
                <div style={{ fontSize: '2rem' }}>
                  <icon.node />
                </div>
                <Typography variant="caption" isTruncated>
                  {icon.label}
                </Typography>
              </Paper>
            </div>
          ))}
        </div>
      </Section>
      <Modal isOpen={modalOpen} onClose={closeModalHandler}>
        {renderIconDetail}
      </Modal>
    </>
  );
};

export default IconsPreviewList;
