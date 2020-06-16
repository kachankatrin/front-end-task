import React from 'react';

function SwitchButton(props) {
    return (
        <div className='switch-menu' onClick={props.handleFiltersOpen}>
            <i class="fas fa-bars"></i>
        </div>
    )
}
export default SwitchButton;