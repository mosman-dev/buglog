import React, { Fragment, useEffect } from 'react';

// @@ Components
import SearchBar from './components/layout/SearchBar';
import AddButton from './components/layout/AddButton';
import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

// @@ Redux Store
import { Provider } from 'react-redux';
import store from './store';

// @@ Styling
import 'materialize-css/dist/css/materialize.min.css';
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
	useEffect(() => {
		// Initializing Materialize JS
		Materialize.AutoInit();
	});

	return (
		<Provider store={store}>
			<Fragment>
				<SearchBar />
				<div className='container'>
					<AddButton />
					<AddLogModal />
					<EditLogModal />
					<AddTechModal />
					<TechListModal />
					<Logs />
				</div>
			</Fragment>
		</Provider>
	);
};

export default App;
