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
  LoaderHorizontalIcon,
  MinusIcon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  PlusIcon,
  RadioIcon,
  RadioEmptyIcon,
  RectangleIcon,
  SpinnerIcon,
} from 'icons';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'components';
import { Section } from '../../../../../../components';
import { PreviewStack } from '../../../../components/index';

export type ActiveIconProps = { label: string; node: ComponentType };
export interface IconsPreviewListProps {
  onSelect?: (icon: ActiveIconProps) => void;
}

const IconsPreviewList = (props: IconsPreviewListProps) => {
  const { onSelect } = props;

  const [modalOpen, setModalOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState<ActiveIconProps | undefined>(undefined);

  const openModalHandler = (icon: ActiveIconProps) => {
    setModalOpen(true);
    setActiveIcon(icon);
    if (onSelect) onSelect(icon);
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
      label: 'LoaderHorizontal',
      node: LoaderHorizontalIcon,
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
    {
      label: 'Spinner',
      node: SpinnerIcon,
    },
  ];

  const renderIconDetail = useMemo(() => {
    if (activeIcon)
      return (
        <>
          <ModalHeader
            title={activeIcon.label}
            divider
            actions={
              <Button onClick={closeModalHandler} variant="text" color="neutral">
                <CloseIcon />
              </Button>
            }
          />
          <ModalBody>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
              <PreviewStack>
                <div style={{}}>
                  <activeIcon.node />
                </div>
                <div style={{ fontSize: '1.5rem' }}>
                  <activeIcon.node />
                </div>
                <div style={{ fontSize: '3rem' }}>
                  <activeIcon.node />
                </div>
              </PreviewStack>
              <div>
                <textarea
                  style={{ width: '100%' }}
                  defaultValue={`import { ${activeIcon.label}Icon } from '@kirei-react-ui/icons';`}
                  readOnly
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter divider justifyContent="flex-end">
            <Button onClick={closeModalHandler} variant="outlined" color="neutral">
              Close
            </Button>
          </ModalFooter>
        </>
      );
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
                cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: '2rem' }}>
                <icon.node />
              </div>
              <span>{icon.label}</span>
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
