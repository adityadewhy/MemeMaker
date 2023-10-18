import React from "react";

export default function Meme() {

    
    return (
        <main>
            <div className="form">
                <input 
                type="text" 
                placeholder="Enter top text"
                className="top-text form-input"
                // name="topTtext"
                // value={topText}
                // onChange={handleChange}
                />

                <input 
                type="text" 
                placeholder="Enter bottom text"
                className="bottom-text form-input"
                />

                <button className="form-btn">
                    Get random meme
                </button>


            </div>
        </main>
    )
}