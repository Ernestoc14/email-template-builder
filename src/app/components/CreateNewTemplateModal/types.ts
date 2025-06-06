export interface CreateNewTemplateModalProps {
  open: boolean,
  onClose: () => void
  goBack: () => void
  newTemplateName: string
  setNewTemplateName: (newTemplateName: string) => void
  sendName: () => void
}