export interface PropsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsert: () => void;
  componentName: string;
  componentVariant: string;
}