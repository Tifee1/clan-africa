import AddOnOption from './AddOnOption'

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
        {addOnOptions.map((item, i) => (
          <AddOnOption
            key={i}
            item={item}
            values={values}
            setFieldValue={setFieldValue}
          />
        ))}
      </div>
    </div>
  )
}

export default StepThreeForm
