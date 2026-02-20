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
                            src="https://maps.google.com/maps?q=1221%20Riverbend%20Rd.%20NW%20Suite%20%23110%20Salem%20OR%2097304&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
                            <p>1221 Riverbend Rd. NW</p>
                            <p>Suite #110</p>
                            <p>Salem, OR 97304</p>
                            <p style={{ margin: '1rem 0' }}>(218) 730-6723</p>
                            <a href="mailto:hairartistrybyrachel@gmail.com">hairartistrybyrachel@gmail.com</a>
                            <br />
                            <br />
                            <a href="https://maps.google.com?q=1221+Riverbend+Rd.+NW,+Suite+110,+Salem,+OR+97304" target="_blank" rel="noopener noreferrer">
                                Get directions &rarr;
                            </a>
                        </div>

                        <div className="hours-grid">
                            <div className="hour-row">
                                <span className="hour-day">Wednesday</span>
                                <span className="hour-time">10:00 am - 7:00 pm</span>
                            </div>
                            <div className="hour-row">
                                <span className="hour-day">Thursday</span>
                                <span className="hour-time">10:00 am - 7:00 pm</span>
                            </div>
                            <div className="hour-row">
                                <span className="hour-day">Friday</span>
                                <span className="hour-time">10:00 am - 7:00 pm</span>
                            </div>
                            <div className="hour-row">
                                <span className="hour-day">Saturday</span>
                                <span className="hour-time">10:00 am - 7:00 pm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
