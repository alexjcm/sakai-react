'use client';

import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Divider } from 'primereact/divider';
import { Splitter, SplitterPanel } from 'primereact/splitter';

const PanelDemo = () => {
    const toolbarItems = [
        {
            label: 'Save',
            icon: 'pi pi-check'
        },
        {
            label: 'Update',
            icon: 'pi pi-sync'
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash'
        },
        {
            label: 'Home Page',
            icon: 'pi pi-home'
        }
    ];

    const toolbarLeftTemplate = () => {
        return (
            <>
                <Button label="New" icon="pi pi-plus" style={{ marginRight: '.5em' }} />
                <Button label="Open" icon="pi pi-folder-open" severity="secondary" />

                <i className="pi pi-bars p-toolbar-separator" style={{ marginRight: '.5em' }}></i>

                <Button icon="pi pi-check" severity="success" style={{ marginRight: '.5em' }} />
                <Button icon="pi pi-trash" severity="warning" style={{ marginRight: '.5em' }} />
                <Button icon="pi pi-print" severity="danger" />
            </>
        );
    };
    const toolbarRightTemplate = <SplitButton label="Options" icon="pi pi-check" model={toolbarItems} menuStyle={{ width: '12rem' }}></SplitButton>;

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Toolbar</h5>
                    <Toolbar start={toolbarLeftTemplate} end={toolbarRightTemplate}></Toolbar>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Divider</h5>
                    <div className="grid">
                        <div className="col-5 flex align-items-center justify-content-center">
                            <p>
                                Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
                                sed quia non numquam eius modi.
                            </p>
                        </div>
                        <div className="col-1">
                            <Divider layout="vertical">
                                <b>OR</b>
                            </Divider>
                        </div>
                        <div className="col-5 align-items-center justify-content-center">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                            <Divider layout="horizontal" align="center">
                                <span className="p-tag">Badge</span>
                            </Divider>

                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt
                                minus.
                            </p>

                            <Divider align="right">
                                <Button label="Button" icon="pi pi-search" outlined></Button>
                            </Divider>

                            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Splitter</h5>
                    <Splitter style={{ height: '300px' }}>
                        <SplitterPanel size={30} minSize={10}>
                            <div className="h-full flex align-items-center justify-content-center">Panel 1</div>
                        </SplitterPanel>
                        <SplitterPanel size={70}>
                            <Splitter layout="vertical">
                                <SplitterPanel size={50} minSize={10}>
                                    <div className="h-full flex align-items-center justify-content-center">Panel 2</div>
                                </SplitterPanel>
                                <SplitterPanel size={50} minSize={10}>
                                    <div className="h-full flex align-items-center justify-content-center">Panel 3</div>
                                </SplitterPanel>
                            </Splitter>
                        </SplitterPanel>
                    </Splitter>
                </div>
            </div>
        </div>
    );
};

export default PanelDemo;
