// React Import
import React from 'react';

//Asset Import
import '../styles/ArrowDown.css';

export default function ArrowDown(sectionTitle) {
    return (
        <div id="wrapper">
            <div id="wrapper-inner">
                <div id="scroll-down">
                    <span className="arrow-down">
                        {/* css generated icon */}
                    </span>
                    <span id="scroll-title">
                        See My Skills
                    </span>
                </div>
            </div>
        </div>
    )
}