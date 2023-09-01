const StepOneForm = ({ errors, handleBlur, handleChange, values, touched }) => {
  return (
    <div className='py-16 px-2 sm:px-16'>
      <h3 className='font-bold text-3xl'>Personal Info</h3>
      <h5 className='text-gray text-base'>
        Please provide your name, email address and phone number
      </h5>
      <div className='grid gap-4'>
        <div className='grid gap- pt-6'>
          <label
            htmlFor='name'
            className='text-marine flex justify-between font-medium'
          >
            <span>Name</span>
            {errors.name && touched.name && (
              <span className='text-strawberry'> {errors.name}</span>
            )}
          </label>
          <input
            type='name'
            name='name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className={`border placeholder:text-gray ${
              errors.name ? 'border-strawberry' : 'border-gray'
            } rounded-md px-2.5 py-1.5 text-base focus:outline-none focus:bg-white ${
              errors.name ? 'focus-border-strawberry' : 'focus:border-purplish'
            }`}
            placeholder='e.g. Akin-Oyelade Boluwatife'
          />
        </div>
        <div className='grid gap-1'>
          <label
            htmlFor='email'
            className='text-marine flex justify-between font-medium'
          >
            <span> Email Address</span>
            {errors.email && touched.email && (
              <span className='text-strawberry'> {errors.email}</span>
            )}
          </label>
          <input
            type='email'
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={`border placeholder:text-gray ${
              errors.email ? 'border-strawberry' : 'border-gray'
            } rounded-md px-2.5 py-1.5 text-base focus:outline-none focus:bg-white ${
              errors.email ? 'focus-border-strawberry' : 'focus:border-purplish'
            }`}
            placeholder='e.g. boluwatife@lorem.com'
          />
        </div>
        <div className='grid gap-1'>
          <label
            htmlFor='phone'
            className='text-marine flex justify-between font-medium'
          >
            <span>Phone Number</span>
            {errors.phone && touched.phone && (
              <span className='text-strawberry'> {errors.phone}</span>
            )}
          </label>
          <input
            type='phone'
            name='phone'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            className={`border placeholder:text-gray ${
              errors.phone ? 'border-strawberry' : 'border-gray'
            } rounded-md px-2.5 py-1.5 text-base focus:outline-none focus:bg-white ${
              errors.phone ? 'focus-border-strawberry' : 'focus:border-purplish'
            }`}
            placeholder='e.g. +1 234 567 890'
          />
        </div>
      </div>
    </div>
  )
}
export default StepOneForm
