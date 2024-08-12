import { Outlet } from "react-router-dom";
import ContextManager from "../context/ContextManager";
import Container from "./Container";
import usePageInfo from "../hooks/usePageInfo";
import PrimaryMobileNav from "../components/header/navigations/PrimaryMobileNav";
import SinglePropertyNav from "../components/header/navigations/SinglePropertyNav";
import DesktopSearchbar from "../components/header/DesktopSearchbar";
import Logo from "../components/header/Logo";
import MobileSearchbar from "../components/header/MobileSearchbar";
import UserMenu from "../components/header/UserMenu";
import Filters from "../components/header/Filters";
import ModalManager from "../components/modals/modal-managers/ModalManager";
import QucikFilters from "../components/header/QucikFilters";
import { twMerge } from "tailwind-merge";

const PageLayout = () => {
  const { isSinglePropertyPage, isHomePage } = usePageInfo();

  return (
    <ContextManager>
      <header className="bg-white h-[80px] w-full fixed left-0 top-0 border-b z-30">
        <Container>
          <div className="flex items-center justify-between gap-3 lg:gap-0 w-full h-full">
            <Logo />
            <DesktopSearchbar />
            <MobileSearchbar />
            <UserMenu />
            <div className="md:hidden">
              <Filters />
            </div>
          </div>

          {!isSinglePropertyPage && <PrimaryMobileNav />}
          {isSinglePropertyPage && <SinglePropertyNav />}
        </Container>
      </header>
      <main
        className={twMerge(
          "min-h-screen h-screen ",
          isHomePage ? "pt-[180px]" : "pt-[100px]"
        )}
      >
        {isHomePage && <QucikFilters />}
        <Container>
          <Outlet />
        </Container>
        <ModalManager />
      </main>
    </ContextManager>
  );
};

export default PageLayout;
