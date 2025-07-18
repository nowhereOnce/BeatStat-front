import React from 'react'
import Select from 'react-select'

export default function RangeSelect({ options, onChange, selectedOption }) {
    return(
        <Select 
            options={options} 
            onChange={onChange}
            defaultValue={selectedOption}
            className='z-[15] w-[70%]'
            styles={{
                control: (base, state) => ({
                    ...base,
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    border: state.isFocused ? '1px solid #1DB954' : 'none',
                    boxShadow: state.isFocused ? '0 0 0 2px #1DB95455' : 'none',
                    color: 'black'
                }),
                menu: (base) => ({
                    ...base,
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    color:'white',
                    
                }),
                singleValue: (base) => ({
                    ...base,
                    color: 'rgba(255, 255, 255, 0.5)',
                }),
                option: (base, { isFocused, isSelected }) => ({
                    ...base,
                    backgroundColor: isSelected
                        ? '#1DB954'
                        : isFocused
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'transparent',
                    color: 'white',
                    cursor: 'pointer',
                }),                
                indicatorSeparator: (base) => ({
                    ...base,
                    backgroundColor: 'rgba(255,255,255,0.1)'
                }),
                dropdownIndicator: (base) => ({
                    ...base,
                    color: 'rgba(255,255,255,0.5)'
                })
                
            }}    
        />
    ) 
}


