interface WelcomeModalProps {
  open: boolean,
  onClose: () => void
  onOptionClick: (value: string) => void
}

export default WelcomeModalProps;