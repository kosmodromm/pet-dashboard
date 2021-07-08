export default function Input ({value, onChange, onEnter}) {

    const onKeyDown = event => {
        if (event.key === 'Enter') {
            onEnter();
        }
    }

    return(
        <div>
            <input value={value} onChange={event => onChange(event.target.value)} onKeyDown={onKeyDown}/>
        </div>
    )
}