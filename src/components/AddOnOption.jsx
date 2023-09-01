const AddOnOption = ({ item, values, setFieldValue }) => {
  return (
    <label className='relative'>
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
}

export default AddOnOption
