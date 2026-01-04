import React from 'react';

const LocationSection = () => {
    return (
        <section className="section location-section">
            <div className="container">
                <div className="location-grid">
                    {/* Map Column */}
                    <div>
                        <iframe
                            width="100%"
                            height="450"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=735%20Browning%20Ave%20SE%2C%20Salem%2C%20Oregon%2097302&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            className="map-frame"
                            title="Location Map"
                        ></iframe>
                    </div>

                    {/* Info Column */}
                    <div className="location-info">
                        <h2>Location & Hours</h2>

                        <div className="location-details" style={{ marginBottom: '3rem' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>The Hairapist</h3>
                            <p>735 Browning Ave SE</p>
                            <p>Salem, Oregon 97302</p>
                            <p style={{ margin: '1rem 0' }}>(218) 730-6723</p>
                            <a href="mailto:hairartistrybyrachel@gmail.com">hairartistrybyrachel@gmail.com</a>
                            <br />
                            <br />
                            <a href="https://maps.google.com?q=735+Browning+Ave+SE,+Salem,+OR+97302" target="_blank" rel="noopener noreferrer">
                                Get directions &rarr;
                            </a>
                        </div>

                        <div className="hours-grid">
                            <span>Monday</span> <span>9:00 am - 6:00 pm</span>
                            <span>Tuesday</span> <span>9:00 am - 6:00 pm</span>
                            <span>Wednesday</span> <span>9:00 am - 5:00 pm</span>
                            <span>Thursday</span> <span>9:00 am - 5:00 pm</span>
                            <span>Friday</span> <span>9:00 am - 5:00 pm</span>
                            <span>Saturday</span> <span>9:00 am - 5:00 pm</span>
                            <span>Sunday</span> <span>Closed</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
