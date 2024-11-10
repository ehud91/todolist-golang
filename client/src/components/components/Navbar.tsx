import React, {useState} from 'react'


const Navbar = (props: any) => {

    const { toggleDarkMode, darkMode } = props;

    return (
        <div>
            <h1 style={{textAlign: 'center', color: darkMode ? 'black' : '#585'}}>Daily tasks</h1>        
            <header>                   
                <nav>
                    <ul>
                        <li className={'first'}></li>
                        <li><a href="#">Go</a></li>
                        <li><a href="#">React</a></li>
                        <li><a href="#">Mongo DB</a></li>
                        <li>
                            <button 
                                style={{padding: '10px'}}
                                onClick={toggleDarkMode}>
                                   {darkMode ? 'Dark Mode' : 'Light Mode'} 
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navbar