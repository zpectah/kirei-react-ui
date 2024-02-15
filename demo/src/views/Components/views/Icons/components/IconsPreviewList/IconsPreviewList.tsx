import React, { useMemo, useState, ComponentType } from 'react';
import {
  BackwardIcon,
  CheckIcon,
  CheckboxIcon,
  CheckboxEmptyIcon,
  CheckboxIndeterminateIcon,
  CircleIcon,
  CloseIcon,
  ExpandLessIcon,
  ExpandMoreIcon,
  ForwardIcon,
  HamburgerIcon,
  MinusIcon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  PlusIcon,
  RadioIcon,
  RadioEmptyIcon,
  RectangleIcon,
} from 'icons';
import { Modal, ModalBody } from 'components';
import { Section } from '../../../../../../components';

export interface IconsPreviewListProps {}

const IconsPreviewList = (props: IconsPreviewListProps) => {
  const {} = props;

  const [modalOpen, setModalOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState<{ label: string; node: ComponentType } | undefined>(undefined);

  const openModalHandler = (icon: { label: string; node: ComponentType }) => {
    setModalOpen(true);
    setActiveIcon(icon);
  };
  const closeModalHandler = () => {
    setModalOpen(false);
    setActiveIcon(undefined);
  };

  const iconsList = [
    {
      label: 'Backward',
      node: BackwardIcon,
    },
    {
      label: 'Check',
      node: CheckIcon,
    },
    {
      label: 'Checkbox',
      node: CheckboxIcon,
    },
    {
      label: 'CheckboxEmpty',
      node: CheckboxEmptyIcon,
    },
    {
      label: 'CheckboxIndeterminate',
      node: CheckboxIndeterminateIcon,
    },
    {
      label: 'Circle',
      node: CircleIcon,
    },
    {
      label: 'Close',
      node: CloseIcon,
    },
    {
      label: 'ExpandLess',
      node: ExpandLessIcon,
    },
    {
      label: 'ExpandMore',
      node: ExpandMoreIcon,
    },
    {
      label: 'Forward',
      node: ForwardIcon,
    },
    {
      label: 'Hamburger',
      node: HamburgerIcon,
    },
    {
      label: 'Minus',
      node: MinusIcon,
    },
    {
      label: 'MoreHorizontal',
      node: MoreHorizontalIcon,
    },
    {
      label: 'MoreVertical',
      node: MoreVerticalIcon,
    },
    {
      label: 'Plus',
      node: PlusIcon,
    },
    {
      label: 'Radio',
      node: RadioIcon,
    },
    {
      label: 'RadioEmpty',
      node: RadioEmptyIcon,
    },
    {
      label: 'Rectangle',
      node: RectangleIcon,
    },
  ];

  const renderIconDetail = useMemo(() => {
    if (activeIcon)
      return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          <div>icon import code</div>
          <div>icon preview</div>
          <div>...{activeIcon.label}...</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '.5rem',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{}}>
              <activeIcon.node />
            </div>
            <div style={{ fontSize: '1.5rem' }}>
              <activeIcon.node />
            </div>
            <div style={{ fontSize: '3rem' }}>
              <activeIcon.node />
            </div>
          </div>
        </div>
      );
  }, [activeIcon]);

  return (
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
          <div
            key={icon.label}
            onClick={() => openModalHandler(icon)}
            style={{
              width: '20%',
              height: 'auto',
              minHeight: '128px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            <div style={{ fontSize: '2rem' }}>
              <icon.node />
            </div>
            <span>{icon.label}</span>
          </div>
        ))}
      </div>
      <Modal isOpen={modalOpen} onClose={closeModalHandler}>
        <ModalBody>{renderIconDetail}</ModalBody>
      </Modal>
    </Section>
  );
};

export default IconsPreviewList;
