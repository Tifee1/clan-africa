import Toggle from 'react-toggle'
import 'react-toggle/style.css'

const StepTwoForm = ({ values, handleChange, setFieldValue }) => {
  const pricingOptions = [
    { name: 'arcade', monthPrice: '9', yearPrice: '90' },
    { name: 'advanced', monthPrice: '12', yearPrice: '120' },
    { name: 'pro', monthPrice: '15', yearPrice: '150' },
  ]
  const handleSub = (e) => {
    if (e.target.checked) {
      setFieldValue('type', 'yearly')
    } else {
      setFieldValue('type', 'monthly')
    }
  }

  return (
    <div className='py-16 px-2 sm:px-16'>
      <h3 className='font-bold text-3xl'>Select your plan</h3>
      <h5 className='text-gray text-base'>
        You have the option of monthly or yearly billing
      </h5>
      <div className='py-12 grid gap-4 md:grid-cols-3 items-center'>
        {pricingOptions.map((item, i) => {
          return (
            <label key={i} className='relative'>
              <input
                type='radio'
                name='pricing'
                value={JSON.stringify(item)}
                checked={values.pricing === item.name}
                onChange={(e) => {
                  setFieldValue('pricing', JSON.parse(e.target.value))
                }}
                className='hidden'
              />
              <article
                className={`${
                  values.pricing.name === item.name
                    ? 'border-marine bg-pastel/20'
                    : 'border-gray'
                } cursor-pointer border p-4 rounded-md`}
              >
                <div className='grid grid-cols-[auto,1fr] md:grid-cols-1 gap-4 md:gap-20 items-center'>
                  <img
                    src={`/assets/images/icon-${item.name}.svg`}
                    alt={item.name}
                  />
                  <div className='grid gap-2'>
                    <h3 className='font-bold'>{item.name}</h3>
                    <span className='text-gray font-semibold'>
                      {values.type === 'monthly'
                        ? `$${item.monthPrice}/mo`
                        : `$${item.yearPrice}/yr`}
                    </span>
                    {values.type === 'yearly' && (
                      <span className='text-marine font-semibold'>
                        2 months free
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </label>
          )
        })}
      </div>

      <div className='flex gap-8 justify-center font-semibold'>
        <span
          className={`${
            values.type === 'monthly' ? 'text-marine' : 'text-gray'
          }`}
        >
          Monthly
        </span>
        <Toggle
          defaultChecked={values.type === 'yearly'}
          icons={false}
          onChange={(e) => {
            handleSub(e)
          }}
        />
        <span
          className={`${
            values.type === 'yearly' ? 'text-marine' : 'text-gray'
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  )
}
export default StepTwoForm
