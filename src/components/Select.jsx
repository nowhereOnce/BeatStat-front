import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' }
]

export default function MyComponent() {
    return(
        <Select 
            options={options} 
            className='z-1'
            defaultValue={options[0]}
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


