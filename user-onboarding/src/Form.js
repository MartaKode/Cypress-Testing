import React from 'react';

function Form(props) {

    const {
        values,
        onInputChange,
        onSubmit,
        // today's stuff
        disabled,
        errors,
        onCheckboxChange,
    } = props

    return (
        <form onSubmit={onSubmit}>
         <h4>General Info</h4>

                <div className='errors'>
                    <div>{errors['first_name']}</div>
                    <div>{errors['last_name']}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.termsOfService}</div>
                </div>
          

            <div className='form inputs'>
               

                {/* ```Inputs/Labels```` */}
                <label>First Name:
        <input
                        value={values['first_name']}
                        onChange={onInputChange}
                        name='first_name'
                        type='text'
                        placeholder='Type name'
                    />
                </label>

                <label>Last Name:
        <input
                        value={values['last_name']}
                        onChange={onInputChange}
                        name='last_name'
                        type='text'
                        placeholder='Type name'
                    />
                </label>
<div className='email'>
                <label>Email:
            <input
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='email'
                        placeholder='Type email'
                    />
                </label>
                </div>
                <label>Password:
            <input
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='text'
                        placeholder='Type password'
                    />
                </label>
<div className='terms-of-service'>
                <label>Terms of service:
            <input
                        type='checkbox'
                        name='termsOfService'
                        checked={values.termsOfService}
                        onChange={onCheckboxChange}
                    />
                </label>
                </div>
            </div>

            <div className='submit-section'>
            <h4>Add User</h4> <button disabled={disabled}>submit</button>
            </div>

        </form>
    )
}



export default Form