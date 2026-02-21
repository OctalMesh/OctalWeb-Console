import { createFileRoute } from "@tanstack/react-router";

import { BaseLayout } from "@app/layouts/base-layout";

import { FAQList } from "@pages/faqs/-components/faq-list";
import categoriesData from "@pages/faqs/-data/categories.json";
import faqsData from "@pages/faqs/-data/faqs.json";

export const Route = createFileRoute("/faqs/")({
  component: FAQsPage,
});

function FAQsPage() {
  return (
    <BaseLayout
      title="Frequently Asked Questions"
      description="Everything you need to know about our different services."
    >
      <div className="px-4 lg:px-6">
        <FAQList faqs={faqsData} categories={categoriesData} />
      </div>
    </BaseLayout>
  );
}
