import { Mail } from "@pages/mail/components/mail";
import { accounts, mails } from "@pages/mail/data";

export default function MailPage() {
  return <Mail accounts={accounts} mails={mails} navCollapsedSize={4} />;
}
