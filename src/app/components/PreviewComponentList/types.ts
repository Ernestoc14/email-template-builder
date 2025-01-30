
export interface PreviewComponentProps {
  open: boolean;
  component: string;
  variant: string
  onClose: () => void;
  // renderHTML: string;
  previewHTML: string;
  anchorEl: HTMLElement | null;
}