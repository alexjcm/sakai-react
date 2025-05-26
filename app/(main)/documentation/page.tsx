import React from 'react';

const Documentation = () => {
    return (
        <>
            <div className="grid">
                <div className="col-12">
                    <div className="card docs">
                        <h4>Current Version</h4>
                        <p>Next v15, React v18, Typescript with PrimeReact v10</p>
                        <pre className="app-code">
                            <code>{`"primereact": "^10.9.5",
"primeicons": "^7.0.0",
"primeflex": "^3.3.1", //required: Utility CSS classes
"sass": "^1.79.6"
`}</code>
                        </pre>

                        <h5>Getting Started</h5>
                        <p>
                            Sakai is an application template for React based on Next.js framework with new{' '}
                            <a href="https://nextjs.org/docs/app" className="font-medium hover:underline text-primary">
                                App Router
                            </a>
                            . To get started, clone the{' '}
                            <a href="https://github.com/primefaces/sakai-react" className="font-medium hover:underline text-primary">
                                repository
                            </a>{' '}
                            from GitHu.
                        </p>

                        <h5>Structure</h5>
                        <p>Sakai consist of a couple of folders where demos and core layout have been separated.</p>
                        <p>
                            There are two{' '}
                            <a href="https://nextjs.org/docs/app/building-your-application/routing/route-groups" className="font-medium hover:underline text-primary">
                                Route Groups
                            </a>{' '}
                            under the app folder; <span className="text-primary font-medium">{`(main)`}</span> represents the pages that reside in the main dashboard layout whereas <span className="text-primary font-medium">{`(full-page)`}</span>{' '}
                            groups the pages with full page content such as landing page or a login page.
                        </p>
                        <ul className="line-height-3">
                            <li>
                                <span className="text-primary font-medium">layout/</span>: Main layout files
                            </li>
                            <li>
                                <span className="text-primary font-medium">demo/</span>: Contains demo related utilities and helpers
                            </li>
                            <li>
                                <span className="text-primary font-medium">app/</span>: Demo pages
                            </li>
                            <li>
                                <span className="text-primary font-medium">public/demo</span>: Assets used in demos
                            </li>
                            <li>
                                <span className="text-primary font-medium">public/layout</span>: Assets used in layout such as a logo
                            </li>
                            <li>
                                <span className="text-primary font-medium">styles/demo</span>: Styles used in demos only
                            </li>
                            <li>
                                <span className="text-primary font-medium">styles/layout</span>: SCSS files of the core layout
                            </li>
                        </ul>
                        <h5>Route Groups</h5>
                        <p>
                            Root Layout is the main of the application and it is defined at <span className="text-primary font-medium">app/layout.tsx</span> file. It contains the style imports and layout context provider.
                        </p>
                        <pre className="app-code">
                            <code>
                                {`import { LayoutProvider } from "./layout/context/layoutcontext";
import { PrimeReactProvider } from "primereact/api";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "../styles/layout/layout.scss";
import "../styles/demo/Demos.scss";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link id="theme-css" href={\`/themes/lara-light-cyan/theme.css\`} rel="stylesheet"></link>
      </head>
      <body>
        <PrimeReactProvider>
            <LayoutProvider>{children}</LayoutProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}

`}
                            </code>
                        </pre>
                        <p>
                            The pages that are using the layout elements need to be defined under the <span className="text-primary font-medium">app/{'(main)'}/</span> folder. Those pages use the{' '}
                            <span className="text-primary font-medium">app/{'(main)'}/layout.tsx</span> as the root layout.
                        </p>
                        <pre className="app-code">
                            <code>
                                {`import { Metadata } from 'next';
import Layout from "../../layout/layout";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Sakai by PrimeReact | Free Admin Template for Next.js",
    ...
  };

export default function AppLayout({ children }: AppLayoutProps) {
  return <Layout>{children}</Layout>;
}
`}
                            </code>
                        </pre>
                        <p>
                            Only the pages that are using config sidebar wihout layout elements need to be defined under the <span className="text-primary font-medium">app/{'(full-page)'}/</span> folder. Those pages use the{' '}
                            <span className="text-primary font-medium">app/{'(full-page)'}/layout.tsx</span> as the root layout.
                        </p>
                        <pre className="app-code">
                            <code>
                                {`import { Metadata } from 'next';
import AppConfig from "../../layout/AppConfig";
import React from "react";

interface SimpleLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Sakai by PrimeReact | Free Admin Template for Next.js",
    ...
  };

export default function SimpleLayout({ children }: SimpleLayoutProps) {
  return (
    <React.Fragment>
      {children}
      <AppConfig simple />
    </React.Fragment>
  );
}
`}
                            </code>
                        </pre>
                        <h5>Default Configuration</h5>
                        <p>
                            Initial layout configuration can be defined at the <span className="text-primary font-medium">layout/context/layoutcontext.tsx</span> file, this step is optional and only necessary when customizing the defaults.
                        </p>

                        <pre className="app-code">
                            <code>
                                {`"use client";
import React, { useState } from 'react';
export const LayoutContext = createContext({} as LayoutContextProps);

export const LayoutProvider = (props) => {
    const [layoutConfig, setLayoutConfig] = useState({
        ripple: false,                          //toggles ripple on and off
        inputStyle: 'outlined',                 //default style for input elements
        menuMode: 'static',                     //layout mode of the menu, valid values are "static" or "overlay"
        style: 'lara',                          //general style of the theme
        darkMode: 'light',                   //color scheme of the template, valid values are "light" and "dark"
        color: 'cyan',                        //general color of the theme
        theme: 'lara-light-cyan',             //default component theme for PrimeReact
        scale: 14                               //size of the body font size to scale the whole application
    });
}`}
                            </code>
                        </pre>

                        <h5>Menu</h5>
                        <p>
                            Main menu is defined at <span className="text-primary font-medium">AppMenu.tsx</span> file based on{' '}
                            <a href="https://www.primefaces.org/primereact/menumodel/" className="font-medium hover:underline text-primary">
                                MenuModel API
                            </a>
                            .
                        </p>

                        <h5>PrimeReact Theme</h5>
                        <p>Sakai theming is based on the PrimeReact theme being used.</p>

                        <h5>SASS Variables</h5>
                        <p>
                            In case you&apos;d like to customize the main layout variables, open <b>_variables.scss</b> file under layout folder. Saving the changes will be reflected instantly at your browser.
                        </p>

                        <h6>layout/_variables.scss</h6>
                        <pre className="app-code" lang="scss">
                            <code>
                                {`
/* General */
$borderRadius:12px;             /* border radius of layout element e.g. card, sidebar */ 
$transitionDuration:.2s;        /* transition duration of layout elements e.g. sidebar */ 
`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Documentation;
