import type { IResourceItem } from "@refinedev/core";

import {
    ContainerOutlined,
    CrownOutlined,
    ShopOutlined,
    TeamOutlined,
} from "@ant-design/icons";

export const resources: IResourceItem[] = [
    {
        name: "companies",
        list: "/companies",
        show: "/companies/:id",
        meta: {
            label: "Companies",
            icon: <ShopOutlined />,
        },
    },
    {
        name: "contacts",
        list: "/contacts",
        show: "/contacts/show/:id",
        meta: {
            label: "Contacts",
            icon: <TeamOutlined />,
        },
    },
    {
        name: "quotes",
        list: "/quotes",
        show: "/quotes/show/:id",
        meta: {
            label: "Quotes",
            icon: <ContainerOutlined />,
        },
    },
    {
        name: "administration",
        meta: {
            label: "Administration",
            icon: <CrownOutlined />,
        },
    },
    {
        name: "settings",
        list: "/administration/settings",
        meta: {
            label: "Settings",
            parent: "administration",
        },
    },
];
