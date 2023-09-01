const PricingOption = ({ item, values, setFieldValue, handleTypeChange }) => {
  return (
    <label className='relative'>
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
          <img src={`/assets/images/icon-${item.name}.svg`} alt={item.name} />
          <div className='grid gap-2'>
            <h3 className='font-bold'>{item.name}</h3>
            <span className='text-gray font-semibold'>
              {values.type === 'monthly'
                ? `$${item.monthPrice}/mo`
                : `$${item.yearPrice}/yr`}
            </span>
            {values.type === 'yearly' && (
              <span className='text-marine font-semibold'>2 months free</span>
            )}
          </div>
        </div>
      </article>
    </label>
  )
}
export default PricingOption
