import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app__main-wrapper'>
            <div className="app__wrapper">
                <header className='header'>
                    <img className='header__img'
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPefPjOAekfOYNxP3Y8OyrzP1I2LSCAgAkicVWOWd-J6kFvIHayhIe6RXzDLskh6HUPU&usqp=CAU"
                         alt="logotype"/>
                </header>
                <nav className='nav'>
                    <ul>
                        <a href="#">
                            <li>Profile</li>
                        </a>
                        <a href="#">
                            <li>Messages</li>
                        </a>
                        <a href="#">
                            <li>News</li>
                        </a>
                        <a href="#">
                            <li>Music</li>
                        </a>
                        <a href="#">
                            <li>Settings</li>
                        </a>
                    </ul>
                </nav>
                <section className='content'>
                    <img className='content__main-img'
                         src="https://img3.goodfon.ru/wallpaper/nbig/8/f4/tropical-paradise-beach-coast-7511.jpg"
                         alt="paradise"/>
                    <div>
                        <img className='content__blogger-img'
                             src="https://www.fivesquid.com/pics/t2/1590081886-137937-1-1_236px.jpg" alt="avatar"/>
                        <h3>Andrey N.</h3>
                        <p>description</p>
                    </div>
                    <div>
                        <h3>My posts</h3>
                        <div>New post
                            <textarea name="" id=""></textarea>
                        </div>
                        <button type='submit'></button>
                    </div>
                    <div>post 1</div>
                    <div>post 2</div>
                </section>
            </div>
        </div>
    );
}

export default App;











