import React, { ReactNode } from 'react';
import { Section, SectionProps } from '../../../../components';

export interface ApiTableItemProps {
  key: number;
  name: ReactNode;
  type: ReactNode;
  defaults?: ReactNode;
  description?: ReactNode;
}

export interface ApiTableProps {
  rows: ApiTableItemProps[];
  title?: ReactNode;
  sectionProps?: Partial<Omit<SectionProps, 'title'>>;
}

const ApiTable = (props: ApiTableProps) => {
  const { rows = [], title, sectionProps } = props;

  return (
    <Section title={title} {...sectionProps}>
      <div style={{ width: '100%' }}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ key, name, type, defaults, description }) => (
              <tr key={key}>
                <th>{name}</th>
                <td>`{type}`</td>
                <td>{defaults ? defaults : '-'}</td>
                <td>{description ? description : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default ApiTable;
