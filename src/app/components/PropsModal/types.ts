import { Component } from "@/app/context/MasterJSONContext";
export interface PropsModalProps {
  isOpen: boolean;
  componentName: string;
  componentVariant: string;
  sendComponent: (component: Component | null) => void 
  onClose: () => void;
}