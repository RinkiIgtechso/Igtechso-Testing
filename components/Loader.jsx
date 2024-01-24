import React from 'react';
import styles from "../src/styles/loader.module.css";

function Loader(){

    return(
        <div className='h-screen flex justify-center items-center'>
            <div className={styles.content}>
                <h2>Igt</h2>
                <h2>Igt</h2>
                <h2>Igt</h2>
            </div>
        </div>
    )
}

export default Loader;