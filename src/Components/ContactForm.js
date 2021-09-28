import React, {useState} from 'react'

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}
Email: ${email}
Contact: ${contact}
Query: ${query}`);
        setName("");
        setEmail("");
        setContact("");
        setQuery("");
    }
    return (
        <form className="contact-form" onSubmit={handleSubmit} method="POST">
            <input type="text" id="name" value={name} placeholder="Your name" onChange={e => setName(e.target.value)} />
            <input type="email" id="email" value={email} placeholder="Email address" onChange={e => setEmail(e.target.value)} />
            <input type="tel" id="contact" value={contact} placeholder="Contact no" onChange={e => setContact(e.target.value)} />
            <textarea name="query" id="query" value={query} placeholder="Your query/comment" onChange={e => setQuery(e.target.value)} rows="5" cols="25" />
            <div className="form-button">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}
