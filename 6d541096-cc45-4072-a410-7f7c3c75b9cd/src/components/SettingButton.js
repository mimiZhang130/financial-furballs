import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Frame } from './Frame/Frame'; // Adjust the path to your Frame component
import { SettingsButton } from './HomePage/SettingsButton/SettingsButton'; // Adjust this import path

export default function PopupGfg() {
    // State to manage popup visibility
    const [open, setOpen] = useState(false);

    // Function to toggle popup visibility
    const togglePopup = () => setOpen(!open);

    return (
        <div>
            {/* Instead of a button, use LogTransaction as the trigger */}
            <SettingsButton onClick={togglePopup} />

            {/* Popup that opens based on the state */}
            <Popup 
                open={open}
                onClose={() => setOpen(false)} // Close the popup by changing the state
                position="right center"
                modal
                nested
            >
                <Frame /> {/* Frame component as the content of the popup */}
            </Popup>
        </div>
    );
};

