import React from 'react';
import { Experiment } from './';
import BottleBubbles from './bottle-bubbles/BottleBubbles';
import MineSweeper from './minesweeper/MineSweeper';
import { Link, Route } from "react-router-dom";
import bgImg from '../assets/images/bottle-img.jpg';

export const navMenu = [
    {
        path: 'bottle-bubbles',
        pageComponent: <BottleBubbles />,
        label: 'Bottle Bubbles',
        exact: true,
        bgImg: bgImg
    },
    {
        path: 'minesweeper',
        pageComponent: <MineSweeper />,
        label: 'MineSweeper',
        exact: false
    }
];

const ExperimentsHome = (props) => {

    const { match } = props;

    return (
        <React.Fragment>
            {navMenu.map(nav => {
                    console.log('nav > ', nav);
                
                return (
                    <div key={nav.path}>
                        <Link to={`${match.url}/${nav.path}`}>{nav.label}</Link>

                        <Route exact={true} path={`/experiments/${nav.path}`} render={() => <Experiment  children={nav.pageComponent} bgImg={nav.bgImg} />} />
                    </div>
                );
            })}

        </React.Fragment>
    );
}


export default ExperimentsHome;
