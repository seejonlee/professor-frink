const Instructions = ()=>{
	return (<p>Welcome to the 3-pane coding view. We've started you off with a basic <u>React</u> project, but feel free to replace it with whatever suits your needs. You can write code separately across the panes or you can write JS and CSS inline in the <b>HTML</b> file.</p>)
}

const validateData = () => {
	// Placeholder for form validation util helper
	// Returns boolean true for validation passes, false otherwise
};

const ApplicantDetailsForm = ({onSubmit}) => {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [error, setError] = useState(null);

const validate = e => {
	e.preventDefault();

	// Validate that 'firstName' meets requirements
	// Validate that 'lastName' meets requirements

	if (validateData(firstName, lastName)) {
		// If validation passes
		(typeof onSubmit === 'function' && onSubmit({
			firstName,
			lastName
		}))
		} else {
			setError('Message explaining what needs to be changed');
		}
	};

	return (
		<form>
			<label htmlFor={'firstName'}>
				First Name
			</label>
			<input
				type={'text'}
				name={'firstName'}
				value={firstName}
				onChange={e => {
				setFirstName(e.target.value);
				}
			/>
			<label htmlFor={'lastName'}>
				Last Name
			</label>
			<input
				type={'text'}
				name={'lastName'}
				value={lastName}
				onChange={e => {
				setLastName(e.target.value);
				}
			/>
			{
				error && (
				<p>{error}</p>
				)
			}
			<button
				type={'submit'}
				onSubmit={validate}
			>
				Next
			</button>
		</form>
	);
}

const MailingAddressForm = () => {
	return (
		<div>
			MailingAddressForm
		</div>
	);
}

const SocialSecurityForm = () => {
	return (
		<div>
		SocialSecurityForm
		</div>
	);
}

const DocumentsForm = () => {
	return (
		<div>
		DocumentsForm
		</div>
	);
}

const ParentForm = () => {
	const [formData, setFormData] = useState({
		applicantDetails: {
		firstName: '',
		lastName: ''
		},
		mailingAddress: {},
		socialSecurity: {},
		documents: {},
	});
	// TODO: Define in ENUM
	const [formStep, setFormStep] = useState('details');

	const onSubmit = (data) => {
		// Handle end state form submission
	}

	const updateData = (stateProperty, data) => {
		setFormData(prev => {
		return {
			...prev,
			[stateProperty]: data,
		}
		});
	}

	return (
		<div>
		{
			formStep === 'details' && (
			<ApplicantDetailsForm
				onSubmit={data => {
				updateData('applicantDetails', data);
				setFormStep('mailingAddress');
				}}
				onSubmit={'some data that came from somewhere'}
			/>
			)
		}
		{
			formStep === 'mailingAddress' && (
			<MailingAddressForm
				onSubmit={data => {
				updateData('mailingAddress', data);
				setFormStep('socialSecurity');
				}}
			/>
			)
		}
		{
			formStep === 'socialSecurity' && (
			<SocialSecurityForm
				onSubmit={data => {
				updateData('socialSecurity', data);
				setFormStep('documents');
				}}
			/>
			)
		}
		{
			formStep === 'documents' && (
			<DocumentsForm
				onSubmit={data => {
				onSubmit({
					...formData,
					documents: data
				});
				}}
			/>
			)
		}
		</div>
	);
}

const App = () => {
	return (
		<div className="App">
		<h1>Hello React!</h1>
		<Instructions/>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
