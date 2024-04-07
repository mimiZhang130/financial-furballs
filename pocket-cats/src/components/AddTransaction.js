import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Frame } from './AddTransactionPage/Frame'; 
import { LogTransaction } from './HomePage/LogTransaction/LogTransaction';

export default function PopupGfg() {
    // State to manage popup visibility
    const [open, setOpen] = useState(false);

    // Function to open the popup
    const openPopup = () => setOpen(true);

    // Function to close the popup
    const closePopup = () => setOpen(false);

    return (
        <div>
            {/* Use LogTransaction as the trigger to open the popup */}
            <LogTransaction onClick={openPopup} />

            {/* Popup that opens based on the state */}
            <Popup 
                open={open}
                onClose={closePopup} // Close the popup by setting 'open' to false
                position="right center"
                modal
                nested
                style = {{backgroundColor: "transparent"}}>
                {/* Pass closePopup to the Frame component so it can close the popup */}
                <Frame onClose={closePopup} /> 
            </Popup>

        </div>
    );
};

