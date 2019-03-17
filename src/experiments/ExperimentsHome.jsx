import React from 'react';
import { BottleBubbles } from './';
import { Route, Link, Switch } from "react-router-dom";

export const navMenu = [
    {
        path: 'bottle-bubbles',
        pageComponent: BottleBubbles,
        label: 'Bottle Bubbles',
        exact: true
    },
    {
        path: 'some-other',
        pageComponent: null,
        label: 'some other',
        exact: true
    }
];

const ExperimentsHome = (props) => {

    const { match } = props;

return (
    <React.Fragment>
        <Switch>
            {navMenu.map(nav => {
                const path = !match.path.includes('experiments') ? nav.path : `${match.path}/${nav.path}`;

                return (
                    <Route component={nav.pageComponent} exact={nav.exact} key={nav.path} path={path} />
                );
            })}
        </Switch>

        {navMenu.map(nav => {
            const path = !match.path.includes('experiments') ? nav.path : `${match.path}/${nav.path}`;
            
            return (
                <div>
                    <p key={nav.path}>
                        <Link to={path}>{nav.label}</Link>
                    </p>
                </div>
            );
        })}
    </React.Fragment>
)}


export default ExperimentsHome;
