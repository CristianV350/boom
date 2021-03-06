import { useRouter } from "next/router";
import Navbar from "@components/layouts/navigation/top-navbar";
import { getAuthCredentials, hasAccess } from "@utils/auth-utils";
import { siteSettings } from "@settings/site.settings";
import SidebarItem from "@components/layouts/navigation/sidebar-item";
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

const ShopLayout: React.FC = ({ children }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const {
    query: { shop },
  } = router;

  const { permissions: currentUserPermissions } = getAuthCredentials();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col transition-colors duration-150">
      <Navbar />
      <div className="flex flex-1 pt-20">
        <aside className="shadow w-72 xl:w-76 hidden lg:block overflow-y-auto bg-white px-4 fixed start-0 bottom-0 h-full pt-22">
          <div className="flex flex-col space-y-6 py-3">
            {siteSettings.sidebarLinks.shop.map(
              ({ href, label, icon, permissions }) => {
                if (!hasAccess(permissions, currentUserPermissions))
                  return null;
                return (
                  <SidebarItem
                    key={label}
                    href={href(shop?.toString()!)}
                    label={t(label)}
                    icon={icon}
                  />
                );
              }
            )}
          </div>
        </aside>
        <main className="w-full lg:ps-72 xl:ps-76">
          <div className="p-5 md:p-8 overflow-y-auto h-full">{children}</div>
        </main>
      </div>
    </div>
  );
};
export default ShopLayout;
