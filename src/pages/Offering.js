import React, { useState } from 'react';
import './Offering.css';

function Offering() {
    const [activeOption, setActiveOption] = useState(null);

    const handleOptionClick = (option) => {
        setActiveOption(activeOption === option ? null : option);
    };

    const offeringOptions = [
        {
            id: 'tithe',
            title: 'Tithe',
            icon: 'bi-cash-coin',
            description: 'Bring the whole tithe into the storehouse, that there may be food in my house.',
            paybill: '247247',
            account: 'TITHE'
        },
        {
            id: 'thanksgiving',
            title: 'Thanksgiving',
            icon: 'bi-heart-fill',
            description: 'Give thanks to the Lord, for he is good; his love endures forever.',
            paybill: '247247',
            account: 'THANKS'
        },
        {
            id: 'offering',
            title: 'Offering',
            icon: 'bi-gift-fill',
            description: 'Each of you should give what you have decided in your heart to give.',
            paybill: '247247',
            account: 'OFFERING'
        }
    ];

    return (
        <div className="offering-page">
            {/* Hero Section */}
            <section className="offering-hero">
                <div className="container">
                    <h1>Giving</h1>
                    <p>Your generosity helps us continue our mission of spreading the Gospel and serving our community.</p>
                </div>
            </section>

            {/* Offering Options */}
            <section className="offering-options">
                <div className="container">
                    <div className="offering-grid">
                        {offeringOptions.map((option) => (
                            <div
                                key={option.id}
                                className={`offering-card ${activeOption === option.id ? 'active' : ''}`}
                                onClick={() => handleOptionClick(option.id)}
                            >
                                <div className="offering-icon">
                                    <i className={`bi ${option.icon}`}></i>
                                </div>
                                <h3>{option.title}</h3>
                                <p>{option.description}</p>

                                {activeOption === option.id && (
                                    <div className="paybill-info">
                                        <h4>Paybill Number</h4>
                                        <span className="paybill-number">{option.paybill}</span>
                                        <p>Account: <strong>{option.account}</strong></p>
                                    </div>
                                )}

                                {activeOption !== option.id && (
                                    <button className="btn btn-primary">Give Now</button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Offering;
