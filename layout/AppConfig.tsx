'use client';

import { PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Sidebar } from 'primereact/sidebar';
import { classNames } from 'primereact/utils';
import React, { useContext, useEffect, useState } from 'react';
import { AppConfigProps, LayoutConfig, LayoutState } from '@/types';
import { LayoutContext } from './context/layoutcontext';
import { SelectButton } from 'primereact/selectbutton';

const AppConfig = (props: AppConfigProps) => {
    const [scales] = useState([12, 13, 14, 15, 16]);
    const [compactMaterial, setCompactMaterial] = useState(false);
    const { layoutConfig, setLayoutConfig, layoutState, setLayoutState } = useContext(LayoutContext);
    const { setRipple, changeTheme } = useContext(PrimeReactContext);

    const lightOnlyThemes = ['arya-green', 'arya-blue', 'arya-purple', 'saga-blue', 'saga-green', 'saga-purple', 'tailwind-light', 'vela-blue', 'vela-green', 'vela-purple'];
    const linkElementId: string = 'theme-css';
    const inputStyles = [
        { label: 'Outlined', value: 'outlined' },
        { label: 'Filled', value: 'filled' }
    ];

    const onConfigButtonClick = () => {
        setLayoutState((prevState: LayoutState) => ({ ...prevState, configSidebarVisible: true }));
    };

    const onConfigSidebarHide = () => {
        setLayoutState((prevState: LayoutState) => ({ ...prevState, configSidebarVisible: false }));
    };

    const changeInputStyle = (e: RadioButtonChangeEvent) => {
        setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, inputStyle: e.value }));
    };

    const changeRipple = (e: InputSwitchChangeEvent) => {
        setRipple?.(e.value as boolean);
        setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, ripple: e.value as boolean }));
    };

    const changeMenuMode = (e: RadioButtonChangeEvent) => {
        setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, menuMode: e.value }));
    };

    const darkToggleDisabled = () => {
        return lightOnlyThemes.includes(layoutConfig.theme);
    };

    const toggleDarkMode = (isDark: boolean) => {
        const newDarkMode = isDark ? 'dark' : 'light';
        applyThemeChange(layoutConfig.style, newDarkMode, layoutConfig.color);
    };

    const switchTheme = (style: string, color?: string) => {
        applyThemeChange(style, layoutConfig.darkMode, color);
    };

    const buildTheme = (style: string, darkMode: string, color?: string): string => {
        if (lightOnlyThemes.includes(style)) {
            return style;
        }

        let newTheme = `${style}-${darkMode}`;
        if (newTheme.startsWith('md-') && compactMaterial) {
            newTheme = newTheme.replace('md-', 'mdc-');
        }

        if (color) {
            newTheme += `-${color}`;
        }
        return newTheme;
    };

    const applyThemeChange = (newStyle: string, darkMode: string = layoutConfig.darkMode, color?: string) => {
        const newTheme = buildTheme(newStyle, darkMode, color);
        const currentTheme = layoutConfig.theme;
        changeTheme?.(currentTheme, newTheme, linkElementId, () => {
            setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, theme: newTheme, darkMode }));
        });
    };

    const decrementScale = () => {
        setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, scale: prevState.scale - 1 }));
    };

    const incrementScale = () => {
        setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, scale: prevState.scale + 1 }));
    };

    const isThemeActive = (style: string, color?: string): boolean => {
        const expectedTheme = buildTheme(style, layoutConfig.darkMode, color);
        return layoutConfig.theme === expectedTheme;
    };

    useEffect(() => {
        document.documentElement.style.fontSize = layoutConfig.scale + 'px';
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [layoutConfig.scale]);

    useEffect(() => {
        if (layoutConfig.theme.startsWith('md')) {
            let tokens = layoutConfig.theme.split('-');
            switchTheme(tokens[0].substring(0, 2), tokens[2]);
        }
    }, [compactMaterial]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <button className="layout-config-button config-link" type="button" onClick={onConfigButtonClick}>
                <i className="pi pi-cog"></i>
            </button>

            <Sidebar visible={layoutState.configSidebarVisible} onHide={onConfigSidebarHide} position="right" className="layout-config-sidebar w-20rem">
                {!props.simple && (
                    <>
                        <h5>Scale</h5>
                        <div className="flex align-items-center">
                            <Button icon="pi pi-minus" type="button" onClick={decrementScale} rounded text className="w-2rem h-2rem mr-2" disabled={layoutConfig.scale === scales[0]}></Button>
                            <div className="flex gap-2 align-items-center">
                                {scales.map((item) => {
                                    return <i className={classNames('pi pi-circle-fill', { 'text-primary-500': item === layoutConfig.scale, 'text-300': item !== layoutConfig.scale })} key={item}></i>;
                                })}
                            </div>
                            <Button icon="pi pi-plus" type="button" onClick={incrementScale} rounded text className="w-2rem h-2rem ml-2" disabled={layoutConfig.scale === scales[scales.length - 1]}></Button>
                        </div>

                        <h5>Menu Type</h5>
                        <div className="flex">
                            <div className="field-radiobutton flex-1">
                                <RadioButton name="menuMode" value={'static'} checked={layoutConfig.menuMode === 'static'} onChange={(e) => changeMenuMode(e)} inputId="mode1"></RadioButton>
                                <label htmlFor="mode1">Static</label>
                            </div>
                            <div className="field-radiobutton flex-1">
                                <RadioButton name="menuMode" value={'overlay'} checked={layoutConfig.menuMode === 'overlay'} onChange={(e) => changeMenuMode(e)} inputId="mode2"></RadioButton>
                                <label htmlFor="mode2">Overlay</label>
                            </div>
                        </div>

                        <h5>Input Style</h5>
                        <SelectButton value={layoutConfig.inputStyle} onChange={(e) => changeInputStyle(e)} options={inputStyles} optionLabel="label" optionValue="value" allowEmpty={false} />

                        <h5>Ripple Effect</h5>
                        <InputSwitch checked={layoutConfig.ripple as boolean} onChange={(e) => changeRipple(e)}></InputSwitch>

                        <h5 className={classNames({ 'p-disabled': darkToggleDisabled() })}>Dark Mode</h5>
                        <InputSwitch checked={layoutConfig.darkMode === 'dark'} onChange={(e) => toggleDarkMode(e.value)} disabled={darkToggleDisabled()} />
                    </>
                )}

                <h5>Lara hemes</h5>
                <div className="grid">
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('lara', 'indigo')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/lara-light-indigo.png" className="w-2rem h-2rem" alt="Lara Light Indigo" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('lara', 'blue')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/lara-light-blue.png" className="w-2rem h-2rem" alt="Lara Light Blue" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('lara', 'purple')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/lara-light-purple.png" className="w-2rem h-2rem" alt="Lara Light Purple" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('lara', 'teal')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/lara-light-teal.png" className="w-2rem h-2rem" alt="Lara Light Teal" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('lara', 'cyan')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/lara-light-teal.png" className="w-2rem h-2rem" alt="Lara Light cyan" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('lara', 'green')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/lara-light-teal.png" className="w-2rem h-2rem" alt="Lara Light green" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('lara', 'pink')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/lara-light-pink.png" className="w-2rem h-2rem" alt="Lara Light pink" />
                        </button>
                    </div>
                </div>

                <h5>Bootstrap 4</h5>
                <div className="grid">
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('bootstrap4', 'blue')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/bootstrap4-light-blue.svg" className="w-2rem h-2rem" alt="Bootstrap Light Blue" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('bootstrap4', 'purple')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/bootstrap4-light-purple.svg" className="w-2rem h-2rem" alt="Bootstrap Light Purple" />
                        </button>
                    </div>
                </div>

                <div className="flex align-items-center gap-3">
                    <h5>Material Design</h5>
                    <label htmlFor="material-condensed" className="text-sm mb-0">
                        Condensed
                    </label>
                    <div className="scale-75">
                        <InputSwitch inputId="material-condensed" checked={compactMaterial} onChange={(e) => setCompactMaterial(e.value)} />
                    </div>
                </div>
                <div className="grid">
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('md', 'indigo')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/md-light-indigo.svg" className="w-2rem h-2rem" alt="Material Light Indigo" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('md', 'deeppurple')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/md-light-deeppurple.svg" className="w-2rem h-2rem" alt="Material Light DeepPurple" />
                        </button>
                    </div>
                </div>

                <h5>Others</h5>
                <div className="grid">
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('soho')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/soho-light.png" className="w-2rem h-2rem" alt="Soho Light" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('viva')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/viva-light.svg" className="w-2rem h-2rem" alt="Viva Light" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('arya-blue')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/arya-blue.png" className="w-2rem h-2rem" alt="Fluent Light" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('arya-green')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/arya-green.png" className="w-2rem h-2rem" alt="Fluent Light" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('arya-orange')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/arya-orange.png" className="w-2rem h-2rem" alt="Fluent Light" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('arya-purple')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/arya-purple.png" className="w-2rem h-2rem" alt="Fluent Light" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('saga-blue')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/saga-blue.png" className="w-2rem h-2rem" alt="Fluent Light" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('saga-green')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/saga-green.png" className="w-2rem h-2rem" alt="Fluent Light" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('saga-purple')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/saga-purple.png" className="w-2rem h-2rem" alt="Fluent Light" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('tailwind-light')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/tailwind-light.png" className="w-2rem h-2rem" alt="Fluent Light" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('vela-blue')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/vela-blue.png" className="w-2rem h-2rem" alt="Fluent Light" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('vela-green')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/vela-green.png" className="w-2rem h-2rem" alt="Fluent Light" />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => switchTheme('vela-purple')}>
                            <img src="https://primefaces.org/cdn/primereact/images/themes/vela-purple.png" className="w-2rem h-2rem" alt="Fluent Light" />
                        </button>
                    </div>
                </div>
            </Sidebar>
        </>
    );
};

export default AppConfig;
