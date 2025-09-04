import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import { StatusBar } from "expo-status-bar";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import createApolloClient from "./src/utils/apolloClient";
import { ApolloProvider } from "@apollo/client/react";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";
import { SortContextProvider } from "./src/contexts/RepositorySortContext";
// import Constants from "expo-constants";

const authStorage = new AuthStorage();

loadDevMessages();
loadErrorMessages();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  // console.log(Constants.expoConfig);

  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <SortContextProvider>
              <Main />
            </SortContextProvider>
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
