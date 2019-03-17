import React from 'react';
import { BottleBubbles } from './';
import { Route, Link, Switch } from "react-router-dom";

export const navMenu = [
    {
        path: 'bobble-bubbles',
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

    console.log('props: ', props.match);
    const { match } = props;

return (
    <React.Fragment>
        <Switch>
            {navMenu.map(nav => {
                return (
                    <Route component={nav.pageComponent} exact={nav.exact} key={nav.path} path={nav.path} />
                );
            })}
        </Switch>

        <Link to='/'>Back to Experiments Home</Link>
        {navMenu.map(nav => {
            return (
                <p key={nav.path}>
                    <Link to={nav.path}>MYPATH IS: {nav.path} || {nav.label}</Link>
                </p>
            );
        })}
    </React.Fragment>

)}


export default ExperimentsHome;
