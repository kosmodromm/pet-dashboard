import {useCallback} from "react";

export default function Input ({value, onChange, onEnter, filteredCities}) {

    const onKeyDown = event => {
        if (event.key === 'Enter') {
            onEnter(value);
        }
    }

    const handleChange = useCallback((event) =>
        onChange(event.target.value), [onChange])

    // двойная проверка для того что бы не был виден пустой блок при отсутствии отфильтрованных вариантов
    const filteredList = (!value || (filteredCities.props.children.length < 1)) ? '' : filteredCities;

    return(
        <div>
            <input className='weather-input'
                   type='text' placeholder='enter city name...'
                   value={value}
                   onChange={handleChange}
                   onKeyDown={onKeyDown}/>
            <div className='match-list'>{filteredList}</div>
        </div>
    )
}