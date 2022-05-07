import React from "react"
import AccordionGroup from '../accordions/AccordionGroup';
import AccordionItem from '../accordions/AccordionItem'
import GroupLayout from "./GroupLayout";
import ItemLayout from "./ItemLayout";

export const AccordionGroupLayout = () => {

  const accordion = [
      {
          title: "Lorem Ipsum",
          img: "https://res.cloudinary.com/skiltime/image/upload/v1651817547/Group_ny8eou.png",
          qmark: "https://res.cloudinary.com/skiltime/image/upload/v1651931327/Vector_ebj5ib.png"
      },
      {
        title: "Lorem Ipsum",
        img: "https://res.cloudinary.com/skiltime/image/upload/v1651817547/image_27_xq5bim.png"
    }
  ]
    const data = [
    {
        title: "Accesories & Ear",
        content:
        "Lorem ipsum .",
        percentage: 22
    },
    {
        title: "Arm",
        content: "Lorem ipsum.",
        percentage: 20
    },
    {
        title: "Background",
        content:
        "Lorem ipsum",
        percentage: 33
    },
    {
        title: "Eye",
        content: "Lorem ipsum.",
        percentage: 6
    },
    {
        title: "Ear & Hat",
        content:
        "Lorem ipsum",
        percentage: 4
    },
    {
        title: "Head",
        content: "Lorem ipsum."
    },
    {
        title: "Glasses",
        content:
        "Lorem ipsum",
        percentage: 7
    },
    {
        title: "Legs",
        content: "Lorem ipsum.",
        percentage: 10
    },
    {
        title: "Joy",
        content:
        "Lorem ipsum",
        percentage: 30
    },
    {
        title: "Sugar",
        content: "Lorem ipsum."
    },
    {
        title: "Coconut",
        content:
        "Lorem ipsum",
        percentage: 12
    },
    {
        title: "Water",
        content: "Lorem ipsum.",
        percentage: 120
    }
  ]

  let groupLayout = (
    <GroupLayout data={data} />
)
  return (
    <div className="container mx-auto">
        {accordion.map((accord, idx) => {
            return <><AccordionGroup accord={accord} id={idx} groupLayout={groupLayout}/><br /></>
        })}
    </div>
  )
}

export const AccordionItemLayout = () => {
    const data = [
      {
        title: "How much do i need to pay for this?",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo."
      }
    ]

    let itemLayout = (
        <ItemLayout />
    )
    return (
      <div className="container mx-auto">
          <AccordionItem itemLayout={itemLayout}/>
      </div>
    )
  }
  