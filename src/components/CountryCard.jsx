import React from 'react';
import Loader from './Loader';
import { getAllCountries } from '../store/actions/Actions';
import { connect } from 'react-redux';

class CountryCard extends React.Component {
    componentDidMount() {
        console.log('mount')
        this.props.getAllCountries(this.props.allCountriesState.query)
    }
    render() {
        console.log('render')
        return (
            !this.props.allCountriesState.loader
                ? <ul className='grid-container'>
                    {this.props.allCountriesState.countries && this.props.allCountriesState.countries.map(item =>
                        <li className='card'>
                            <div className='side front'>
                                <img src={item.flag} />
                                <h1>{item.name}</h1>
                                <h3>{item.capital}</h3>
                            </div>
                            <div className='side back'>
                                <div className='flex-container'>
                                    <div>
                                        <p><span className='naming'>Population: </span>{item.population}</p>
                                        <p><span className='naming'>Region: </span>{item.region}</p>
                                        <p><span className='naming'>Currencies: </span>{item.currencies.map((currency, index) =>
                                            item.currencies.length > 1 && index < item.currencies.length - 1
                                                ? <span>{`${currency.code} ${currency.symbol}, `}</span>
                                                : <span>{`${currency.code} ${currency.symbol}`}</span>
                                        )}
                                        </p>
                                        <p><span className='naming'>Timezones: </span>{item.timezones.map((timezone, index) =>
                                            item.timezones.length > 1 && index < item.timezones.length - 1
                                                ? <span>{timezone}, </span>
                                                : <span>{timezone}</span>
                                        )}
                                        </p>
                                        <ul><span className='naming'>Translations: </span>
                                            <li><span>de: </span>{item.translations.de},</li>
                                            <li><span>es: </span>{item.translations.es},</li>
                                            <li><span>it: </span>{item.translations.it}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
                : <Loader />

        )
    }
}
const mapStateToProps = (state) => {
    return {
        allCountriesState: state.allCountriesState
    }
}
const mapDispatchToProps = {
    getAllCountries
}
export default connect(mapStateToProps, mapDispatchToProps)(CountryCard);