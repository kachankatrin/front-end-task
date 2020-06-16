import React from 'react';
import { connect } from 'react-redux';
import RadioButton from './RadioButtons';
import { getAllCountries, handleRadio } from '../store/actions/Actions';

class Sidebar extends React.Component {
    render() {
        const style = this.props.allCountriesState.display;
        return (
                <div style={style} className='sidebar'>
                    <form >
                        <RadioButton
                            name='Regions'
                            values={[
                                { value: 'europe', label: 'Europe', checked: this.props.allCountriesState.region === 'europe' },
                                { value: 'asia', label: 'Asia', checked: this.props.allCountriesState.region === 'asia' },
                                { value: 'africa', label: 'Africa', checked: this.props.allCountriesState.region === 'africa' },
                                { value: 'americas', label: 'Americas', checked: this.props.allCountriesState.region === 'americas' },
                                { value: 'oceania', label: 'Oceania', checked: this.props.allCountriesState.region === 'oceania' }
                            ]}
                            handleChange={(e) => { this.props.handleRadio(e, 'region') }}
                        />
                        <button onClick={(e) => { e.preventDefault(); this.props.getAllCountries(`${this.props.allCountriesState.query}/${this.props.allCountriesState.region}`) }}>get</button>
                    </form>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        allCountriesState: state.allCountriesState
    }
}
const mapDispatchToProps = {
    handleRadio,
    getAllCountries
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);