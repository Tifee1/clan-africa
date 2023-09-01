const StepThreeForm = ({ values, setFieldValue }) => {
  const addOnOptions = [
    {
      id: 'onlineService',
      name: 'online service',
      text: 'Access to multiplayer games',
      monthPrice: 1,
      yearPrice: 10,
    },
    {
      id: 'higherStorage',
      name: 'larger storage',
      text: 'Extra 1TB of cloud save',
      monthPrice: 2,
      yearPrice: 20,
    },
    {
      id: 'customizableProfile',
      name: 'customizable profile',
      text: 'Custom theme on your profile',
      monthPrice: 2,
      yearPrice: 20,
    },
  ]
  return (
    <div className='py-16 px-2 sm:px-16'>
      <h3 className='font-bold text-3xl'>Pick add-ons</h3>
      <h5 className='text-gray text-base'>
        Add-ons help enhance your gaming experience
      </h5>
      <div className='py-12 grid gap-4 items-center'>
        {addOnOptions.map((item, i) => {
          return (
            <label key={i} className='relative'>
              <article
                className={`grid grid-cols-[auto,1fr] items-center gap-6 cursor-pointer 
                border p-4 rounded-md ${
                  values.addons[item.id]
                    ? 'border-marine bg-pastel/20'
                    : 'border-gray'
                }`}
              >
                {/* Checkbox column */}
                <div>
                  <input
                    type='checkbox'
                    name={`addons[${item.id}]`}
                    checked={values.addons[item.id]}
                    onChange={(e) => {
                      const isChecked = e.target.checked
                      setFieldValue(`addons[${item.id}]`, isChecked)
                    }}
                  />
                </div>

                {/* Content column */}
                <div className='flex items-center justify-between'>
                  <div className='grid gap-2'>
                    <h3 className='font-bold'>{item.name}</h3>
                    <span className='text-gray font-semibold'>{item.text}</span>
                  </div>
                  <h4 className='text-marine font-semibold'>
                    {values.type === 'monthly'
                      ? `$${item.monthPrice}/mo`
                      : `$${item.yearPrice}/yr`}
                  </h4>
                </div>
              </article>
            </label>
          )
        })}
      </div>
    </div>
  )
}
export default StepThreeForm
