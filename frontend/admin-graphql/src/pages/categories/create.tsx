import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';
import Layout from "@components/layouts/admin";
import CreateOrUpdateCategoriesForm from "@components/category/category-form";

import { adminOnly } from "@utils/auth-utils";

export default function CreateCategoriesPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-create-category")}
        </h1>
      </div>
      <CreateOrUpdateCategoriesForm />
    </>
  );
}
CreateCategoriesPage.authenticate = {
  permissions: adminOnly,
};
CreateCategoriesPage.Layout = Layout;


