import React from 'react';

function RadioButton(props) {
    const { name, values, handleChange } = props;
    return (
        <div>
            <h3>{name}</h3>
            <div>
                {values.map(item => {
                    return (
                        <div className='radio'>
                            <label className='radio-container'>{item.label}
                                <input 
                                    type='radio'
                                    checked={item.checked}
                                    name={name}
                                    value={item.value}
                                    onChange={handleChange}
                                />
                                <div className='radio-bg'>
                                    <span
                                    className='custom-radio'
                                    checked={item.checked}
                                    name={name}
                                    value={item.value}
                                    onChange={handleChange}
                                    />
                                </div>
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
} 
export default RadioButton;