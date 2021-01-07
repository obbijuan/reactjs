import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Redirect, Route, Switch } from 'react-router-dom'

import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'


export const DashboardRouters = () => {
    return (
        <>
            <Navbar />
            <div className="ml-4 mt-4">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/heroe/:heroeId" component={HeroScreen}/>
                    <Route exact path="/dc" component={DcScreen} />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
            
        </>
    )
}
