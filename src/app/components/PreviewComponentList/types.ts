import ComponentVariants from "@/app/types/Components";

export interface PreviewComponentProps {
  open: boolean;
  component: string
  typeVariant: string;
  variant: keyof typeof ComponentVariants;
  onClose: () => void;
}