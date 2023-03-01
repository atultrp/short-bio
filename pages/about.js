import React from 'react'

const about = () => {
  const aboutPageContent = "Welcome to our website! We are passionate about sharing the life stories of some of the world's most famous and inspirational personalities.;Our website provides a collection of short biographies of people from different walks of life including actors, artists, musicians, politicians, entrepreneurs, athletes and more. We believe that everyone has a story to tell and our mission is to inspire and motivate our readers through the stories of others.;We understand that there are many people out there who have achieved great things in their lives and we aim to showcase their accomplishments and their journeys. Our team of writers carefully research and curate the information to provide our readers with an accurate and concise biography that highlights the key moments in the life of the personality.;Whether you are a student, a professional, or just someone who is interested in learning about famous personalities, our website is the perfect place for you. We believe that by reading the biographies of successful people, you can learn valuable lessons about perseverance, hard work, and determination.;In addition to the biographies, we also provide interesting facts and trivia about the personalities to give our readers a deeper insight into their lives. We hope that our website will not only inform and educate our readers but also inspire them to pursue their dreams and aspirations.;Thank you for visiting our website and we hope that you enjoy reading the biographies of some of the most famous and inspirational personalities in the world."

  const quoteByMe = [
    {
      quote: "While it's true that someone else's actions can either negatively or positively impact your life, ultimately, it's up to you to determine the direction in which you want to go. It's important to choose the path that aligns with your personal goals and values because this is your life, and you owe it to yourself to strive for excellence.",
    },
    {
      quote: "If you come across someone who genuinely cares about you, it's important not to let them go because they are the ones who truly desire to bring you authentic happiness.",
    },
    {
      quote: "It's essential to keep in mind that the perfect timing for taking action towards your personal goals will never come, as the best time to act is always the present. Therefore, make the most of the present moment and strive to do your very best to accomplish your objectives.",
    },
  ]

  return (
    <div className='mt-3 md:mt-6 mx-6 lg:mx-16'>
      <h2 className="custom-font uppercase text-2xl md:text-4xl font-semibold bg-gradient-to-t from-rose-500 to-pink-400 text-transparent bg-clip-text">About Us</h2>

      {aboutPageContent.split(";").map((paragraph, index) => {
        return (
          <p key={index} className="md:text-lg text-gray-600 my-2 md:my-4">{paragraph}</p>
        )
      })}

      <div className='mt-5'>
        <h2 className="text-2xl custom-font uppercase text-left md:text-left bg-gradient-to-t from-rose-500 to-pink-400 text-transparent bg-clip-text font-semibold">Creator</h2>
        <p className="md:text-lg text-gray-600">
          Greetings! This wonderful website is created by Atul Tripathi, a skilled Web Developer and Freelancer from India. My expertise lies in conceptualizing and transforming ideas into elegant interfaces with a focus on delivering a top-notch user experience, robust architecture, and high-quality code.

          My interest in open-source technology has led me to become an avid enthusiast and maintainer. The open-source community has been an incredible source of knowledge and inspiration, and I cherish the collaborative and knowledge-sharing culture that is inherent in open-source projects.
        </p>
      </div>
      <br />
      <div>
        <h2 className="text-2xl custom-font uppercase text-left md:text-left bg-gradient-to-t from-rose-500 to-pink-400 text-transparent bg-clip-text font-semibold">Some Lines from Creator</h2>
        <ul>
          {quoteByMe?.map((quote, index) => {
            return (
              <li key={index} className="mt-4 border-2 rounded-lg p-2 border-rose-400 border-l-8 text-gray-600">
                <p className="text-sm sm:text-base font-medium">{quote.quote}</p>
                <p className='text-xs tracking-widest mt-0.5 uppercase text-end italic'>- Atul Tripathi</p>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="my-4 text-gray-600 italic">
          Created by using coding skills with love 💙️ by - <a href="https://github.com/atultrp">
            <button type="button" className="font-semibold">Atul Tripathi</button></a>
      </div>
    </div>
  )
}

export default about