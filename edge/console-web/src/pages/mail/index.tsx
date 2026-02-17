import { Mail } from "@/pages/mail/components/mail.tsx";
import { accounts, mails } from "@/pages/mail/data.tsx";

export default function MailPage() {
  return <Mail accounts={accounts} mails={mails} navCollapsedSize={4} />;
}
