import { InstantSearch } from "react-instantsearch";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { ErrorComponent, useNotificationProvider } from "@refinedev/antd";
import { Authenticated, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import routerProvider, {
    CatchAllNavigate,
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";

import { ConfigProvider, App as AntdApp } from "antd";

import "./utilities/init-dayjs";

import { resources, themeConfig } from "@/config";
import {
    authProvider,
    dataProvider,
    indexName,
    liveProvider,
    searchClient,
} from "@/providers";

import { Layout } from "./components";
import { SettingsPage } from "./routes/administration";
import {
    CompanyListPage,
} from "./routes/companies";
import {
    ContactShowPage,
    ContactsListPage,
} from "./routes/contacts";
import {
    MyContentListPage,
    MyContentShowPage,
} from "./routes/mycontent";
import { UpdatePasswordPage } from "./routes/update-password";

import "@refinedev/antd/dist/reset.css";
import "./styles/antd.css";
import "./styles/fc.css";
import "./styles/index.css";

const App: React.FC = () => {
    return (
        <InstantSearch searchClient={searchClient} indexName={indexName}>
            <BrowserRouter>
                <ConfigProvider theme={themeConfig}>
                    <AntdApp>
                        <DevtoolsProvider>
                            <Refine
                                dataProvider={dataProvider}
                                liveProvider={liveProvider}
                                routerProvider={routerProvider}
                                resources={resources}
                                notificationProvider={useNotificationProvider}
                                options={{
                                    liveMode: "auto",
                                    syncWithLocation: true,
                                    warnWhenUnsavedChanges: true,
                                }}
                            >
                                <Routes>
                                        <Route
                                            path="/companies"
                                            element={
                                                <CompanyListPage>
                                                    <Outlet />
                                                </CompanyListPage>
                                            }
                                        >
                                        </Route>
                                        <Route
                                            path="/contacts"
                                            element={
                                                <ContactsListPage>
                                                    <Outlet />
                                                </ContactsListPage>
                                            }
                                        >
                                            <Route index element={null} />
                                            <Route
                                                path="show/:id"
                                                element={<ContactShowPage />}
                                            />
                                        </Route>
                                        <Route
                                            path="/mycontent"
                                            element={
                                                <MyContentPage>
                                                    <Outlet />
                                                </MyContentPage>
                                            }
                                        >
                                        </Route>
                                        <Route
                                            path="/mycontent/show/:id"
                                            element={<QMyContentPage />}
                                        />
                                        <Route
                                            path="/administration"
                                            element={<Outlet />}
                                        >
                                            <Route
                                                path="settings"
                                                element={<SettingsPage />}
                                            />
                                        </Route>
                                        <Route
                                            path="*"
                                            element={<ErrorComponent />}
                                        />
                                </Routes>
                                <DocumentTitleHandler />
                            </Refine>
                            <DevtoolsPanel />
                        </DevtoolsProvider>
                    </AntdApp>
                </ConfigProvider>
            </BrowserRouter>
        </InstantSearch>
    );
};

export default App;
