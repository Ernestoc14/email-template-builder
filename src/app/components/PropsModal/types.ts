export interface PropsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsert: (updatedHTML: string) => void;
  componentName: string;
  componentVariant: string;
  language: string;
}