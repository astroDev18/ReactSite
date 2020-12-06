import React from 'react';
import { InfoSection, Pricing } from '../../components'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Home() {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjTwo} />
            <Pricing />
            <InfoSection {...homeObjFour} />
        </>
    );
}
export default Home;