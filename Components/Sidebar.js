import React from 'react'
import '../styles/Sidebar.module.css'

const Sidebar = () => {
    return (
        <div>
            <div className="main-content">
                <div id="title">Animated Sidebar Navigation Demo</div>
            </div>
            <div className="btn">
                <div id='top'></div>
                <div id='middle'></div>
                <div id='bottom'></div>
            </div>
            <div className="box">
                <div className="items">
                    <div class="item">Item 1</div>
                    <div class="item">Item 2</div>
                    <div class="item">Item 3</div>
                    <div class="item">Item 4</div>
                    <div class="item">Item 5</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
