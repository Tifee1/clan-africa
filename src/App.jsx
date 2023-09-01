import { useState } from 'react'
import { Formik } from 'formik'
import StepOneForm from './components/StepOneForm'
import StepTwoForm from './components/StepTwoForm'
import StepFourForm from './components/StepFourForm'
import Finished from './components/Finished'
import StepThreeForm from './components/StepThreeForm'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pricing: { name: 'arcade', monthPrice: 9, yearPrice: 90 },
    type: 'monthly',
    addons: {
      onlineService: false,
      higherStorage: false,
      customizableProfile: false,
    },
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [finished, setFinished] = useState(false)

  const stepsInfo = [
    { step: 1, text: 'Your Info' },
    { step: 2, text: 'Select Plan' },
    { step: 3, text: 'ADD-ONS' },
    { step: 4, text: 'Summary' },
  ]
  const handleStepChange = (newStep) => {
    setCurrentStep(Math.min(Math.max(newStep, 1), 4))
  }
  const validateForm = (values) => {
    const errors = {}
    if (!values.name) {
      errors.name = 'This field is Required'
    } else if (!values.email) {
      errors.email = 'This field is Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid Email Address'
    } else if (!values.phone) {
      errors.phone = 'This field is Required'
    }
    return errors
  }

  const handleSubmit = (values) => {
    if (currentStep !== 4) {
      setCurrentStep((old) => Math.min(old + 1, 4))
    } else {
      console.log(values)
      setFinished(true)
      setFormData(formData)
    }
  }

  return (
    <main className='relative pt-20'>
      <div className='sm:hidden absolute top-0 h-[200px] w-full bg-[url(/assets/images/bg-sidebar-mobile.svg)] bg-cover pt-8'>
        <div className='mb-8 flex gap-4 justify-center'>
          {stepsInfo.map((item) => {
            return (
              <span
                key={item.step}
                className={`flex items-center justify-center border border-white  rounded-full w-10 h-10 ${
                  item.step === currentStep
                    ? 'text-black bg-[hsl(231,100%,99%)]'
                    : 'text-white '
                }  font-bold`}
              >
                {item.step}
              </span>
            )
          })}
        </div>
      </div>
      <section className='bg-white w-[90%] max-w-6xl mx-auto rounded-lg grid gap-4 sm:grid-cols-[270px,1fr] mt-8 p-4 z-10 relative'>
        <div className='hidden sm:grid bg-[url(/assets/images/bg-sidebar-desktop.svg)] bg-cover'>
          <div className='mb-8 flex flex-col gap-4 pt-16 px-12'>
            {stepsInfo.map((item) => {
              return (
                <div
                  className='grid grid-cols-[auto,1fr] gap-4 items-center font-bold'
                  key={item.step}
                >
                  <span
                    className={`flex items-center justify-center border border-white  rounded-full w-10 h-10 ${
                      item.step === currentStep
                        ? 'text-black bg-[hsl(231,100%,99%)]'
                        : 'text-white '
                    }  font-bold`}
                  >
                    {item.step}
                  </span>
                  <div className='grid gap-2'>
                    <span className='text-gray'>STEP {item.step}</span>
                    <span className='text-white uppercase'>{item.text}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {finished ? (
          <Finished />
        ) : (
          <Formik
            initialValues={formData}
            validate={validateForm}
            onSubmit={handleSubmit}
          >
            {(formikProps) => (
              <form
                onSubmit={formikProps.handleSubmit}
                className='grid gap-4 pt-8 w-full'
              >
                {/* Render appropriate form components based on currentStep */}
                {currentStep === 1 && (
                  <StepOneForm
                    errors={formikProps.errors}
                    touched={formikProps.touched}
                    values={formikProps.values}
                    handleBlur={formikProps.handleBlur}
                    handleChange={formikProps.handleChange}
                  />
                )}
                {currentStep === 2 && (
                  <StepTwoForm
                    values={formikProps.values}
                    handleChange={formikProps.handleChange}
                    setFieldValue={formikProps.setFieldValue}
                  />
                )}
                {currentStep === 3 && (
                  <StepThreeForm
                    values={formikProps.values}
                    handleChange={formikProps.handleChange}
                    setFieldValue={formikProps.setFieldValue}
                  />
                )}
                {currentStep === 4 && (
                  <StepFourForm
                    values={formikProps.values}
                    setCurrentStep={handleStepChange}
                  />
                )}
                <div className='flex justify-between items-center'>
                  <div className='pt-12'>
                    {currentStep !== 1 && (
                      <button
                        type='button'
                        className='trans text-base text-gray font-bold hover:text-marine'
                        onClick={() => {
                          setCurrentStep((old) => {
                            let newValue = old - 1
                            if (newValue < 1) {
                              newValue = 1
                            }
                            return newValue
                          })
                        }}
                      >
                        Go Back
                      </button>
                    )}
                  </div>
                  <div className='pt-12'>
                    <button
                      type='submit'
                      className={`trans ${
                        currentStep === 4
                          ? 'bg-purplish hover:bg-purplish/70'
                          : 'bg-marine hover:bg-marine/70'
                      }  tracking-wider text-base text-white py-2 px-4 rounded-md`}
                    >
                      {currentStep === 4 ? 'Confirm' : 'Next Step'}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        )}
      </section>
    </main>
  )
}

export default App
