import React, {useState} from 'react';

const FAQSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (index) => {
    index !== selectedIndex && 
    setSelectedIndex(index)
  }
  const FAQItems = [
    {
      title: 'How to Track Backlog list',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero, nobis itaque distinctio aliquam cumque sapiente iste eum tempore odio.'
    },
    {
      title: 'How to Track TODO list',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero, nobis itaque distinctio aliquam cumque sapiente iste eum tempore odio.'
    },
    {
      title: 'How to Track In=Progress list',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero, nobis itaque distinctio aliquam cumque sapiente iste eum tempore odio.'
    }
  ]
  return(
    <>
    {
      FAQItems.map((item, index) => {
        return(
          <Accordion
          title={item.title}
          description ={item.description}
          isOpen={index===selectedIndex}
          onClickHandler={handleClick}
          index={index}
          ></Accordion>
        )
      })
    }
    </>
  )
}