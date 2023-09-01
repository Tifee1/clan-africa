import React, { useEffect, useState } from 'react'

const AddOn = ({ title, price }) => (
  <div className='flex justify-between font-medium'>
    <h4 className='text-gray'>{title}</h4>
    <span className='text-black/70'>+${price}</span>
  </div>
)

const StepFourForm = ({ values, setCurrentStep }) => {
  const [totalSum, setTotalSum] = useState(0)

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

  useEffect(() => {
    let total = parseInt(
      values.type === 'monthly'
        ? values.pricing.monthPrice
        : values.pricing.yearPrice
    )

    addOnOptions.forEach((addOn) => {
      if (values.addons[addOn.id]) {
        total += values.type === 'monthly' ? addOn.monthPrice : addOn.yearPrice
      }
    })

    setTotalSum(total)
  }, [values])

  return (
    <div className='py-16 px-2 sm:px-16'>
      <h3 className='font-bold text-3xl'>Finishing up</h3>
      <h5 className='text-gray text-base'>
        Double-check everything looks OK before confirming
      </h5>
      <article className='bg-[hsl(231,100%,99%)] p-4 mt-6 rounded-md grid gap-3'>
        <div className='font-bold flex justify-between items-center'>
          <div className='grid gap-1 py-2'>
            <h4>
              {values.pricing.name} ({values.type})
            </h4>
            <div>
              <button
                onClick={() => setCurrentStep(2)}
                className='text-gray underline'
              >
                Change
              </button>
            </div>
          </div>
          <h4>
            $
            {values.type === 'monthly'
              ? `${values.pricing.monthPrice}/mo`
              : `${values.pricing.yearPrice}/yr`}
          </h4>
        </div>
        <hr className='bg-gray text-gray border-gray' />

        {addOnOptions.map(
          (addOn) =>
            values.addons[addOn.id] && (
              <AddOn
                key={addOn.id}
                title={addOn.name}
                price={
                  values.type === 'monthly'
                    ? `${addOn.monthPrice}/mo`
                    : `${addOn.yearPrice}/yr`
                }
              />
            )
        )}
      </article>
      <div className='flex justify-between items-center font-medium'>
        <h4 className='text-gray px-3 py-4'>
          Total (per {values.type === 'monthly' ? 'month' : 'year'})
        </h4>
        <span className='text-marine text-lg'>
          +${totalSum}/{values.type === 'monthly' ? 'mo' : 'yr'}
        </span>
      </div>
    </div>
  )
}

export default StepFourForm
