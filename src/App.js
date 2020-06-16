import React, { useReducer } from 'react';
import './App.scss';
import { handleFiltersOpen } from './store/actions/Actions';
import CountryCard from './components/CountryCard';
import Sidebar from './components/Sidebar';
import SwitchButton from './components/SwitchButton';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const isSidebarOpen = useSelector(state => state.allCountriesState.areFiltersOpen);
  console.log(isSidebarOpen);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <a href='#' className='go-up'><i class="fas fa-angle-double-up"></i></a>
      <SwitchButton handleFiltersOpen={(e) => {e.stopPropagation(); dispatch(handleFiltersOpen())}} />
      <Sidebar />
      <CountryCard />
    </div>
  );
}

export default (App);