import {useCallback} from "react";

export default function Input ({value, onChange, onEnter}) {

    const onKeyDown = event => {
        if (event.key === 'Enter') {
            onEnter();
        }
    }

    return(
        <div>
            <input className='weather-input'
                   type='text' placeholder='enter city name'
                   value={value}
                   onChange={useCallback(event => onChange(event.target.value), [onChange])}
                   onKeyDown={onKeyDown}/>
        </div>
    )
}