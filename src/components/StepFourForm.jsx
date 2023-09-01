const StepFourForm = ({ values, setCurrentStep }) => {
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
              ? `${values.pricing['monthPrice']}/mo`
              : `${values.pricing['yearPrice']}/yr`}
          </h4>
        </div>
        <hr className='bg-gray text-gray border-gray' />
        <div className='flex justify-between font-medium'>
          <h4 className='text-gray'>online service</h4>
          <span className='text-black/70'>+$1/mo</span>
        </div>
        <div className='flex justify-between font-medium'>
          <h4 className='text-gray'>larger storage</h4>
          <span className='text-black/70'>+$2/mo</span>
        </div>
      </article>
      <div className='flex justify-between items-center font-medium'>
        <h4 className='text-gray px-3 py-4'>
          Total (per {values.type === 'monthly' ? 'month' : 'year'})
        </h4>
        <span className='text-marine text-lg'>+$12/mo</span>
      </div>
    </div>
  )
}
export default StepFourForm
