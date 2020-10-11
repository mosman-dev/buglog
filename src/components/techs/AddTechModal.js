import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTech }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const onSubmit = () => {
		if (firstName === '' || lastName === '') {
			M.toast({ html: 'Please enter first and last name' });
		} else {
			addTech({
				firstName,
				lastName,
			});
			M.toast({ html: `${firstName} ${lastName} was added as a tech` });
			// Clear Fields
			setFirstName('');
			setLastName('');
		}
	};

	return (
		<div id='add-tech-modal' className='modal modal-custom'>
			<div className='modal-content tech-margin'>
				<h4>New Technician</h4>

				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='firstname'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
						<label htmlFor='firstname' className='active'>
							First Name
						</label>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='lastname'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
						<label htmlFor='lastname' className='active'>
							Last Name
						</label>
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<a
					href='#!'
					onClick={onSubmit}
					className='modal-close waves-effect blue waves-light btn'
				>
					Enter
				</a>
			</div>
		</div>
	);
};

AddTechModal.propTypes = {
	addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
