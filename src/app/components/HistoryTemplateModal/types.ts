export interface HistoryTemplateModalProps {
  open: boolean,
  onClose: () => void
  goBack: () => void
  setNewTemplateName: (newTemplateName: string) => void
  sendName: () => void
}

export interface HistoryTemplates{
  name: string
  dateCreated: Date,
  dateModified: Date
}