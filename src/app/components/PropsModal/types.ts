import { Component } from "../Canva/Canva";

export interface PropsModalProps {
  isOpen: boolean;
  onClose: () => void;
  componentName: string;
  componentVariant: string;
  sendComponent: (component: Component | null) => void 
}