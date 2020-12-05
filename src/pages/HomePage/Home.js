import React from 'react';
import { InfoSection } from '../../components'
import HomeObjOne  from './Data';

const Home = () => {
    return (
        <div>
            <InfoSection {...HomeObjOne}/>
        </div>
    )
}

export default Home;