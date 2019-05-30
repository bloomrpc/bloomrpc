import * as React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

interface DraggableItemProps {
  children: JSX.Element,
  active?: boolean,
}

export const DraggableItem = SortableElement(({children, active}: DraggableItemProps) => (
    <div className={`inline-item ${active ? "active" : ""}`}>{children}</div>
));

interface DraggableTabProps {
  children: JSX.Element[] | JSX.Element
}

export const DraggableTabs = SortableContainer(({ children }: DraggableTabProps) => {
  return (
      <div>
        {children}
      </div>
  )
});