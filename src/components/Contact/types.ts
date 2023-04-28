export interface ContactData {
  name: string;
  phone: string;
  email: string;
  interes: string;
  message: string;
}

export interface ContactUsProps {
  description?: string;
  title?: string;
  thanksText?: string;
  interestsSelectionTitle?: string;
  budgetSelectSubtitle?: string;
}
