import PricingOption from './PricingOption'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

const StepTwoForm = ({ values, handleChange, setFieldValue }) => {
  const pricingOptions = [
    { name: 'arcade', monthPrice: '9', yearPrice: '90' },
    { name: 'advanced', monthPrice: '12', yearPrice: '120' },
    { name: 'pro', monthPrice: '15', yearPrice: '150' },
  ]

  const handleTypeChange = (e) => {
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
        {pricingOptions.map((item, i) => (
          <PricingOption
            key={i}
            item={item}
            values={values}
            setFieldValue={setFieldValue}
          />
        ))}
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
          onChange={handleTypeChange}
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
