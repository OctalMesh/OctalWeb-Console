import { BaseLayout } from "@/app/layouts/base-layout.tsx";
import { FAQList } from "./components/faq-list.tsx";

// Import data
import categoriesData from "./data/categories.json";
import faqsData from "./data/faqs.json";

export default function FAQsPage() {
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
