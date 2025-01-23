import ComponentVariants from "@/app/types/Components";

export interface PreviewComponentProps {
  open: boolean;
  component: keyof typeof ComponentVariants;
  onClose: () => void;
  anchorEl: HTMLElement | null
}