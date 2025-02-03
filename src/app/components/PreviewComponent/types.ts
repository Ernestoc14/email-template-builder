
export interface PreviewComponentProps {
  open: boolean;
  component: string;
  variant: string
  onClose: () => void;
  previewHTML: string;
  anchorEl: HTMLElement | null;
}