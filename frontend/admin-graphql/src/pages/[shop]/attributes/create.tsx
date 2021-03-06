import CreateOrUpdateAttributeForm from "@components/attribute/attribute-form";
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

import ShopLayout from "@components/layouts/shop";
import { adminOwnerAndStaffOnly } from "@utils/auth-utils";

export default function CreateAttributePage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:create-new-attribute")}
        </h1>
      </div>
      <CreateOrUpdateAttributeForm />
    </>
  );
}
CreateAttributePage.authenticate = {
  permissions: adminOwnerAndStaffOnly,
};
CreateAttributePage.Layout = ShopLayout;

