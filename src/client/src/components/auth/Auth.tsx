import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from '../Footer';
import Login from './Login';

const Page: React.SFC = () => {
    return (
        <div>
            <Switch>
                <Route component={Login} />
            </Switch>
            <Footer />
        </div>
    );
};

export default Page;
