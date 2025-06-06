export interface PreviewComponentProps {
  open: boolean;
  component: string;
  variant: string
  onClose: () => void;
  anchorEl: HTMLElement | null;
}