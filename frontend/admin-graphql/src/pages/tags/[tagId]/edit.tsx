import Layout from "@components/layouts/admin";
import { useRouter } from "next/router";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

import { useTagQuery } from "@graphql/tags.graphql";
import CreateOrUpdateTagForm from "@components/tag/tag-form";
import { adminOnly } from "@utils/auth-utils";

export default function UpdateTagPage() {
  const { t } = useTranslation();
  const { query } = useRouter();
  const { data, loading, error } = useTagQuery({
    variables: {
      id: query.tagId as string,
    },
  });
  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-gray-300">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-edit-tags")}
        </h1>
      </div>

      <CreateOrUpdateTagForm initialValues={data?.tag} />
    </>
  );
}
UpdateTagPage.authenticate = {
  permissions: adminOnly,
};
UpdateTagPage.Layout = Layout;


