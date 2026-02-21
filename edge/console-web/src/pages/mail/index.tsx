import { createFileRoute } from "@tanstack/react-router";

import { BaseLayout } from "@app/layouts/base-layout";

import { Mail } from "@pages/mail/-components/mail";
import { accounts, mails } from "@pages/mail/-data";

export const Route = createFileRoute("/mail/")({
  component: MailPage,
});

function MailPage() {
  return (
    <BaseLayout>
      <div className="@container/main flex flex-1 flex-col">
        <div className="h-[calc(100vh-4rem)] px-4 md:px-6">
          <Mail
            accounts={accounts}
            mails={mails}
            defaultLayout={[15, 32, 48]}
            defaultCollapsed={false}
            navCollapsedSize={4}
          />
        </div>
      </div>
    </BaseLayout>
  );
}
