import React from 'react';
import { InfoSection} from '../../components'
import { homeObjThree} from './Data';

function Home() {
    return (
        <>
            <InfoSection {...homeObjThree} />
        </>
    );
}
export default Home;