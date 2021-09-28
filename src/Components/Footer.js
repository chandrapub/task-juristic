import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            Copyright ©️ abc Digital {currentYear}; chandrapub@gmail.com; +45 71 59 47 41
        </footer>
    )
}
