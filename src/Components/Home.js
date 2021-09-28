import React from 'react';
import EventSection from './EventSection';
import ContactSection from './ContactSection';

export default function Home({addNewShift}) {
    return (
        <> 
            <EventSection />
            <ContactSection />
        </>
    )
}
