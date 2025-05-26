'use client';
import React from 'react';
import { Button } from 'primereact/button';
import BlockViewer from '../../../demo/components/BlockViewer';

const Free = () => {

    const block1 = `
<div className="grid grid-nogutter surface-0 text-800">
    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span className="block text-6xl font-bold mb-1">Create the screens</span>
            <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
            <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
            <Button label="Live Demo" type="button" className="p-button-outlined" />
        </section>
    </div>
    <div className="col-12 md:col-6 overflow-hidden">
        <img src="/demo/images/blocks/hero/hero-1.png" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
    </div>
</div>
    `;

    const block3 = `
<div className="surface-0">
    <div className="text-900 font-bold text-6xl mb-4 text-center">Pricing Plans</div>
    <div className="text-700 text-xl mb-6 text-center line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>

    <div className="grid">
        <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
                <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                    <div className="text-900 font-medium text-xl mb-2">Basic</div>
                    <div className="text-600">Plan description</div>
                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                    <div className="flex align-items-center">
                        <span className="font-bold text-2xl text-900">$9</span>
                        <span className="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                    <ul className="list-none p-0 m-0 flex-grow-1">
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                    </ul>
                    <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                    <Button label="Buy Now" className="p-3 w-full mt-auto" />
                </div>
            </div>
        </div>

        <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
                <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                    <div className="text-900 font-medium text-xl mb-2">Premium</div>
                    <div className="text-600">Plan description</div>
                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                    <div className="flex align-items-center">
                        <span className="font-bold text-2xl text-900">$29</span>
                        <span className="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                    <ul className="list-none p-0 m-0 flex-grow-1">
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Duis ultricies lacus sed</span>
                        </li>
                    </ul>
                    <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                    <Button label="Buy Now" className="p-3 w-full" />
                </div>
            </div>
        </div>

        <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
                <div className="shadow-2 p-3 flex flex-column" style={{ borderRadius: '6px' }}>
                    <div className="text-900 font-medium text-xl mb-2">Enterprise</div>
                    <div className="text-600">Plan description</div>
                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                    <div className="flex align-items-center">
                        <span className="font-bold text-2xl text-900">$49</span>
                        <span className="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                    <ul className="list-none p-0 m-0 flex-grow-1">
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Duis ultricies lacus sed</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Imperdiet proin</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Nisi scelerisque</span>
                        </li>
                    </ul>
                    <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                    <Button label="Buy Now" className="p-3 w-full p-button-outlined" />
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block4 = `
<div className="surface-0 text-700 text-center">
    <div className="text-blue-600 font-bold mb-3"><i className="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div>
    <div className="text-900 font-bold text-5xl mb-3">Join Our Design Community</div>
    <div className="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
    <Button label="Join Now" icon="pi pi-discord" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" />
</div>
    `;

    const block5 = `
<div className="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
    <div className="font-bold mr-8">🔥 Hot Deals!</div>
    <div className="align-items-center hidden lg:flex">
        <span className="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
    </div>
    <a className="flex align-items-center ml-2 mr-8">
        <span className="underline font-bold">Learn More</span>
    </a>
    <a className="flex align-items-center no-underline justify-content-center border-circle text-100 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150" style={{ width: '2rem', height: '2rem' }}>
        <i className="pi pi-times"></i>
    </a>
</div>
    `;

    return (
        <>
            <BlockViewer header="Hero" code={block1} free>
                <div className="grid grid-nogutter surface-0 text-800">
                    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                        <section>
                            <span className="block text-6xl font-bold mb-1">Create the screens</span>
                            <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
                            <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
                            <Button label="Live Demo" type="button" className="p-button-outlined" />
                        </section>
                    </div>
                    <div className="col-12 md:col-6 overflow-hidden">
                        <img src="/demo/images/blocks/hero/hero-1.png" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Pricing" code={block3} containerClassName="surface-0 px-4 py-8 md:px-6 lg:px-8" free>
                <div className="surface-0">
                    <div className="text-900 font-bold text-6xl mb-4 text-center">Pricing Plans</div>
                    <div className="text-700 text-xl mb-6 text-center line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>

                    <div className="grid">
                        <div className="col-12 lg:col-4">
                            <div className="p-3 h-full">
                                <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                                    <div className="text-900 font-medium text-xl mb-2">Basic</div>
                                    <div className="text-600">Plan description</div>
                                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                    <div className="flex align-items-center">
                                        <span className="font-bold text-2xl text-900">$9</span>
                                        <span className="ml-2 font-medium text-600">per month</span>
                                    </div>
                                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                    <ul className="list-none p-0 m-0 flex-grow-1">
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Arcu vitae elementum</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Dui faucibus in ornare</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Morbi tincidunt augue</span>
                                        </li>
                                    </ul>
                                    <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                                    <Button label="Buy Now" className="p-3 w-full mt-auto" />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 lg:col-4">
                            <div className="p-3 h-full">
                                <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                                    <div className="text-900 font-medium text-xl mb-2">Premium</div>
                                    <div className="text-600">Plan description</div>
                                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                    <div className="flex align-items-center">
                                        <span className="font-bold text-2xl text-900">$29</span>
                                        <span className="ml-2 font-medium text-600">per month</span>
                                    </div>
                                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                    <ul className="list-none p-0 m-0 flex-grow-1">
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Arcu vitae elementum</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Dui faucibus in ornare</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Morbi tincidunt augue</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Duis ultricies lacus sed</span>
                                        </li>
                                    </ul>
                                    <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                                    <Button label="Buy Now" className="p-3 w-full" />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 lg:col-4">
                            <div className="p-3 h-full">
                                <div className="shadow-2 p-3 flex flex-column" style={{ borderRadius: '6px' }}>
                                    <div className="text-900 font-medium text-xl mb-2">Enterprise</div>
                                    <div className="text-600">Plan description</div>
                                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                    <div className="flex align-items-center">
                                        <span className="font-bold text-2xl text-900">$49</span>
                                        <span className="ml-2 font-medium text-600">per month</span>
                                    </div>
                                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                    <ul className="list-none p-0 m-0 flex-grow-1">
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Arcu vitae elementum</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Dui faucibus in ornare</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Morbi tincidunt augue</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Duis ultricies lacus sed</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Imperdiet proin</span>
                                        </li>
                                        <li className="flex align-items-center mb-3">
                                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                            <span>Nisi scelerisque</span>
                                        </li>
                                    </ul>
                                    <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                                    <Button label="Buy Now" className="p-3 w-full p-button-outlined" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Call to Action" code={block4} containerClassName="surface-0 px-4 py-8 md:px-6 lg:px-8" free>
                <div className="surface-0 text-700 text-center">
                    <div className="text-blue-600 font-bold mb-3">
                        <i className="pi pi-discord"></i>&nbsp;POWERED BY DISCORD
                    </div>
                    <div className="text-900 font-bold text-5xl mb-3">Join Our Design Community</div>
                    <div className="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
                    <Button label="Join Now" icon="pi pi-discord" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" />
                </div>
            </BlockViewer>

            <BlockViewer header="Banner" code={block5} containerClassName="surface-0 py-8" free>
                <div className="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
                    <div className="font-bold mr-8">🔥 Hot Deals!</div>
                    <div className="align-items-center hidden lg:flex">
                        <span className="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
                    </div>
                    <a className="flex align-items-center ml-2 mr-8">
                        <span className="underline font-bold">Learn More</span>
                    </a>
                    <a className="flex align-items-center no-underline justify-content-center border-circle text-100 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150" style={{ width: '2rem', height: '2rem' }}>
                        <i className="pi pi-times"></i>
                    </a>
                </div>
            </BlockViewer>
        </>
    );
};

export default Free;
