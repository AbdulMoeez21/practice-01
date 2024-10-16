import React from 'react'
import Card from '../components/Card'

const Props = () => {
  return (
    <>
      
        <h1>Props & Tailwind</h1>
      {/* <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/1416900/pexels-photo-1416900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="382" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>

      </div> */}
      
      <Card username={'Rao'}  desc={'you can import it into your App.js and modify your Props.js if you want to include both cards'} btntext={'View Profile'}/>
      <Card  username={'Rao'} desc={'Here is a new card component called CardComponent that you can add alongside your Props component'}  btntext={'View my Profile'}/>
      <Card username={'Rao'}  desc={'you can import it into your App.js and modify your Props.js if you want to include both cards'}  btntext={'View his Profile'}/>
    <Card  username={'Rao'} desc={'Here is a new card component called CardComponent that you can add alongside your Props component'}  />
    </> )
}

export default Props