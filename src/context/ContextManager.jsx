import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./AuthContext";
import { ModalProvider } from "./ModalContext";
import { SearchQueryProvider } from "./SearchQueryContext";
import { NewPropertyFormProvider } from "./NewPropertyFormProvider";

const ContextManager = ({ children }) => {
  return (
    <>
      <Toaster />
      <AuthProvider>
        <ModalProvider>
          <NewPropertyFormProvider>
            <SearchQueryProvider>{children}</SearchQueryProvider>
          </NewPropertyFormProvider>
        </ModalProvider>
      </AuthProvider>
    </>
  );
};

export default ContextManager;
