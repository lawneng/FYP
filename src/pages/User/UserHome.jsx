import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

import { Tabs, MantineProvider } from '@mantine/core';
import { useTheme } from "../../GloabalThemeProvider";
import { IconWriting, IconRobot } from '@tabler/icons-react';
import UploadImage from "./UploadImage";
import UserNavBar from "../General/UserNavBar";

function UserHome() {

    const { isDarkMode } = useTheme();

    return (
        <MantineProvider theme={{ colorScheme: isDarkMode ? 'dark' : 'light' }} withGlobalStyles withNormalizeCSS>
        <div>
            <UserNavBar />
            <UploadImage />
            <Tabs defaultValue="model">
                <Tabs.List>
                    <Tabs.Tab value="model" icon={<IconRobot size="0.8rem" />}>Model</Tabs.Tab>
                    <Tabs.Tab value="design" icon={<IconWriting size="0.8rem" />}>Design</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="model" pt="xs">
                    Model tab content
                </Tabs.Panel>

                <Tabs.Panel value="design" pt="xs">
                    Design tab content
                </Tabs.Panel>
            </Tabs>
        </div>
        </MantineProvider>

    );
}

export default UserHome;
