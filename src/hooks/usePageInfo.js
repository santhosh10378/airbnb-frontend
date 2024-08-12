import { useLocation, useNavigate, useParams } from "react-router-dom";
import { navLinks } from "../data/navLinks";

const usePageInfo = () => {
  const { pathname } = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(pathname, { replace: true });
  };

  const goBack = () => {
    navigate(-1);
  };

  const pageChecks = {
    isHomePage: pathname === "/",
    isSinglePropertyPage: pathname.startsWith("/properties/"),
    isAccountPage: pathname.startsWith("/account/"),

    isMessagesPage: pathname === "/account/messages",
    isTripsPage: pathname === "/account/trips",
    isWishlistsPage: pathname === "/account/wishlists",
    isMypropertiesPage: pathname === "/account/properties",
    isProfilePage: pathname === "/account/profile",
  };

  return {
    ...pageChecks,
    pathname,
    navLinks,
    refreshPage,
    goBack,
    params,
  };
};

export default usePageInfo;
