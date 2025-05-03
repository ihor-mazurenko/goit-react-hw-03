export default function ContactForm({ onAdd }) {
    const handleSubmit = e => {
        e.preventDefault();
        onAdd({
            id: Date.now(),
            name: e.target.elements.text.value,
            number: e.target.elements.number.value
        });
        e.target.reset();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="text" />
            <input type="tel" name="number"/>
            <button type="submit">Add Contact!</button>
        </form>
    )
};