import React from 'react';
import { InfoSection, Pricing } from '../../components'
import { homeObjFour } from './Data';

function Home() {
    return (
        <>
            <Pricing />
            <InfoSection {...homeObjFour} />
        </>
    );
}
export default Home;