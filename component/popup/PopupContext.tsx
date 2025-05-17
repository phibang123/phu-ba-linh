'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
import DraggablePopup from './DraggablePopup';

interface Popup {
  id: string;
  title: string;
  content: ReactNode;
  position: { x: number; y: number };
}

interface PopupContextType {
  popups: Popup[];
  addPopup: (title: string, content: ReactNode, position?: { x: number; y: number }) => void;
  removePopup: (id: string) => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup phải được sử dụng trong PopupProvider');
  }
  return context;
};

export const PopupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [popups, setPopups] = useState<Popup[]>([]);

  const addPopup = (
    title: string,
    content: ReactNode,
    position = { x: Math.random() * 100 + 50, y: Math.random() * 100 + 50 }
  ) => {
    const newPopup: Popup = {
      id: Date.now().toString(),
      title,
      content,
      position,
    };
    setPopups((prev) => [...prev, newPopup]);
  };

  const removePopup = (id: string) => {
    setPopups((prev) => prev.filter((popup) => popup.id !== id));
  };

  return (
    <PopupContext.Provider value={{ popups, addPopup, removePopup }}>
      {children}
      <div className="fixed inset-0 z-40" style={{ pointerEvents: 'none' }}>
        {popups.map((popup, index) => (
          <DraggablePopup
            key={popup.id}
            isOpen={true}
            onClose={() => removePopup(popup.id)}
            title={popup.title}
            defaultPosition={popup.position}
            zIndex={1000 + index}
          >
            {popup.content}
          </DraggablePopup>
        ))}
      </div>
    </PopupContext.Provider>
  );
};

export default PopupContext; 