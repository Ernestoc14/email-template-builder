export interface PropsModalProps {
  isOpen: boolean;
  onClose: () => void;
  componentName: string;
  componentVariant: string;
  props?: Record<string, string>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, prop: string) => void;
}