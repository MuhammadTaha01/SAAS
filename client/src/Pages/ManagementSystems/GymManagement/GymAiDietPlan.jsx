import React from 'react'
import Sidebar from './GymComponents/Sidebar'

const GymAiDietPlan = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className="">

          <div className="flex flex-wrap">

            <div className="bg-purple-300 px-5 py-5 m-5 w-96 overflow-x-hidden rounded-lg">
              <h1 className='font-semibold'>Basic Personal Information</h1>
              
              <div className="flex flex-col">
                <label htmlFor="">Your Age: </label>
                <input type="number" className='border border-black rounded-xl px-2'/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Your Gender: </label>
                <select name="" id="" className='border border-black rounded-xl'>
                  <option value="" selected disabled>Select</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Your Height: </label>
                <input type="text" placeholder='In Feet' className='border border-black rounded-xl px-2'/>
                <input type="text" placeholder='In Inches' className='border border-black rounded-xl px-2'/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Your Weight: </label>
                <input type="text" placeholder='In Kgs' className='border border-black rounded-xl px-2'/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Your LifeStyle/Occupation: </label>
                <input type="text" placeholder='Desk Job/Physically demanding work' className='border border-black rounded-xl px-2'/>
              </div>
            </div>

            <div className="bg-purple-300 px-5 py-5 m-5 w-96 overflow-x-hidden rounded-lg">
              <h1 className='font-semibold'>What are your health goals?</h1>
              <div className="flex flex-col">
                <label htmlFor="">Your health goals: </label>
                <select name="" id="" className='border border-black rounded-lg'>
                  <option value="" selected disabled>Select</option>
                  <option value="">Weight Loss</option>
                  <option value="">Muscle Gain</option>
                  <option value="">Maintaining Weight</option>
                  <option value="">Improving General health</option>
                </select>
              </div>
            </div>

            <div className="bg-purple-300 px-5 py-5 m-5 w-96 overflow-x-hidden rounded-lg">
              <h1 className='font-semibold'>Dietary Habits & prefernces</h1>
              <div className="flex flex-col">
                <label htmlFor="">Current Diet: </label>
                <select name="" id="" className='border border-black rounded-lg'>
                  <option value="" disabled selected>Select</option>
                  <option value="">BreakFast Only</option>
                  <option value="">Lunch Only</option>
                  <option value="">Dinner Only</option>
                  <option value="">BreakFast & Lunch Only</option>
                  <option value="">BreakFast & Dinner Only</option>
                  <option value="">Lunch & Dinner Only</option>
                  <option value="">BreakFast, Lunch & Dinner Only</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Prefered Diet: </label>
                <select name="" id="" className='border border-black rounded-lg'>
                  <option value="" selected disabled>Select</option>
                  <option value="">Vegetarian</option>
                  <option value="">Vegetarian + Meat</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Your Snacks intake: </label>
                <select name="" id="" className='border border-black rounded-lg'>
                  <option value="" disabled selected>Select</option>
                  <option value="">Low Intake (Sometimes)</option>
                  <option value="">Medium Intake (1-3 times a day)</option>
                  <option value="">Large Intake (5-10 times a day)</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Your Meal Portions: </label>
                <select name="" id="" className='border border-black rounded-lg'>
                  <option value="" disabled selected>Select</option>
                  <option value="">Sometimes - (After 1 - 2 days)</option>
                  <option value="">Sometimes - (Once or Thrice in a day)</option>
                  <option value="">In Small Crunches - (regularly)</option>
                  <option value="">In Medium Crunched - (regularly)</option>
                  <option value="">In Bulk Crunched - (regularly)</option>
                </select>
              </div>
            </div>

            <div className="bg-purple-300 px-5 py-5 m-5 w-96 overflow-x-hidden rounded-lg">
              <h1 className='font-semibold'>Health Conditions & Allergies</h1>
              <div className="flex flex-col">
                <label htmlFor="">Do you have any known health conditions: </label>
                <input type="text" name="" id="" placeholder='Diabetes, high cholesterol, heart disease, hypertension, digestive disorders, etc.' className='border border-black rounded-lg px-2'/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Do you have any food allergies or intolerances: </label>
                <input type="text" name="" id="" placeholder='lactose intolerance, gluten sensitivity, nut allergies, etc.' className='border border-black rounded-lg px-2'/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Any specific nutrient deficiencies: </label>
                <input type="text" name="" id="" placeholder='Low iron, vitamin D, calcium, etc.' className='border border-black rounded-lg px-2'/>
              </div>
            </div>

            <div className="bg-purple-300 px-5 py-5 m-5 w-96 overflow-x-hidden rounded-lg">
              <h1 className='font-semibold'>Budget & Accessibility</h1>
              <div className="flex flex-col">
                <label htmlFor="">What is your budget for food each week/month: </label>
                <input type="text" name="" id="" placeholder='Helps to recommend affordable meal options.' className='border border-black rounded-lg px-2'/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Do you have access to fresh produce and groceries?: </label>
                <select name="" id="" className='border border-black rounded-lg px-2'>
                  <option value="" selected disabled>Select</option>
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </div>
            </div>

            <div className="bg-purple-300 px-5 py-5 m-5 w-96 overflow-x-hidden rounded-lg">
              <h1 className='font-semibold'>LifeStyle Factors</h1>
              <div className="flex flex-col">
                <label htmlFor="">Do you have any dietary restrictions due to religious or cultural reasons: </label>
                <select name="" id="">
                  <option value="" disabled selected>Select</option>
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Do you drink alcohol or smoke:  </label>
                <select name="" id="" className='border border-black rounded-lg px-2'>
                  <option value="" selected disabled>Select</option>
                  <option value="">Alcohol - Yes</option>
                  <option value="">Smoke - Yes</option>
                  <option value="">No Drugs</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Do you take any supplements or medications:  </label>
                <select name="" id="" className='border border-black rounded-lg px-2'>
                  <option value="" selected disabled>Select</option>
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </div>
            </div>

            <div className="bg-purple-300 px-5 py-5 m-5 w-96 overflow-x-hidden rounded-lg">
              <h1 className='font-semibold'>Medical History</h1>
              <div className="flex flex-col">
                <label htmlFor="">Have you had any major surgeries or illnesses recently: </label>
                <input type="text" name="" id="" placeholder='What is it?' className='border border-black rounded-lg px-2'/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Any history of eating disorders: </label>
                <input type="text" name="" id="" placeholder='This is important for giving sensitive, balanced advice.' className='border border-black rounded-lg px-2'/>
              </div>
            </div>

            <div className="bg-purple-300 px-5 py-5 m-5 w-96 overflow-x-hidden rounded-lg">
              <h1 className='font-semibold'>Activity & Exercise Routine</h1>
              <div className="flex flex-col">
                <label htmlFor="">What kind of exercise do you do: </label>
                <select name="" id="">
                  <option value="" disabled selected>Select</option>
                  <option value="">Yoga</option>
                  <option value="">Zumba</option>
                  <option value="">Cardio</option>
                  <option value="">Body-building</option>
                  <option value="">Weight Lifting</option>
                  <option value="">Normal Exercise - To stay just fit</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">How often do you exercise: </label>
                <select name="" id="" className='border border-black rounded-lg px-2'>
                  <option value="" disabled selected>Select</option>
                  <option value="">1 time a day</option>
                  <option value="">2 time a day</option>
                  <option value="">3 time a day</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Do you have any fitness goals: </label>
                <select name="" id="" className='border border-black rounded-lg px-2'>
                  <option value="" disabled selected>Select</option>
                  <option value="">Muscle Gain</option>
                  <option value="">Muscle Loss</option>
                  <option value="">Weight Gain</option>
                  <option value="">Weight Loss</option>
                  <option value="">Fat Gain</option>
                  <option value="">Fat Loss</option>
                </select>
              </div>
            </div>

            <div className="bg-purple-300 px-5 py-5 m-5 w-96 overflow-x-hidden rounded-lg">
              <h1 className='font-semibold'>Meal timing & Prefernces</h1>
              <div className="flex flex-col">
                <label htmlFor="">Do you have preferred meal times: </label>
                <select name="" id="">
                  <option value="" disabled selected>Select</option>
                  <option value="">Morning (Only)</option>
                  <option value="">Evening (Only)</option>
                  <option value="">Night (Only)</option>
                  <option value="">Morning & Evening (Only)</option>
                  <option value="">Morning & Night (Only)</option>
                  <option value="">Evening & Night (Only)</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Do you skip any meals regularly: </label>
                <select name="" id="" className='border border-black rounded-lg px-2'>
                  <option value="" disabled selected>Select</option>
                  <option value="">Yes - (Morning Meal)</option>
                  <option value="">Yes - (Evening Meal)</option>
                  <option value="">Yes - (Night Meal)</option>
                  <option value="">No</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Favorite foods taste and cuisines: </label>
                <select name="" id="" className='border border-black rounded-lg px-2'>
                  <option value="" disabled selected>Select</option>
                  <option value="">Sweet</option>
                  <option value="">Spicy</option>
                  <option value="">Salty</option>
                  <option value="">Sweet & Salty</option>
                  <option value="">Sweet & Spicy</option>
                  <option value="">Spicy & Salty</option>
                </select>
              </div>
            </div>

            <div className="bg-purple-300 px-5 py-5 m-5 w-96 overflow-x-hidden rounded-lg">
              <h1 className='font-semibold'>Hydration</h1>
              <div className="flex flex-col">
                <label htmlFor="">How much water do you drink daily: </label>
                <select name="" id="">
                  <option value="" disabled selected>Select</option>
                  <option value="">1-3 glass (per day)</option>
                  <option value="">3-5 glass (per day)</option>
                  <option value="">5-8 glass (per day)</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Do you skip any meals regularly: </label>
                <select name="" id="" className='border border-black rounded-lg px-2'>
                  <option value="" disabled selected>Select</option>
                  <option value="">Yes - (Morning Meal)</option>
                  <option value="">Yes - (Evening Meal)</option>
                  <option value="">Yes - (Night Meal)</option>
                  <option value="">No</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Do you consume other fluids (juices, soft drinks, tea, coffee): </label>
                <select name="" id="" className='border border-black rounded-lg px-2'>
                  <option value="" disabled selected>Select</option>
                  <option value="">Juices</option>
                  <option value="">MilkShakes</option>
                  <option value="">Tea</option>
                  <option value="">Coffee</option>
                  <option value="">Soft Drinks</option>
                  <option value="">Water Only</option>
                </select>
              </div>
            </div>

          </div>

            <div className="flex items-center justify-center my-5">
              <textarea name="" id="" placeholder='Response From AI will be generated here...' className='border border-black rounded-xl h-52 w-2/3 p-2 hover:bg-gray-100' disabled></textarea>
            </div>

        </div>
      </div>
  )
}

export default GymAiDietPlan