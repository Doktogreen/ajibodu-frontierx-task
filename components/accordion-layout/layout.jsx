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
        "Lorem ipsum ",
        percentage: 9
    },
    {
        title: "Arm",
        content: "Lorem ipsum",
        percentage: 15
    },
    {
        title: "Background",
        content:
        "Lorem ipsum",
        percentage: 2
    },
    {
        title: "Eye",
        content: "Lorem ipsum",
        percentage: 32
    },
    {
        title: "Ear & Hat",
        content:
        "Lorem ipsum",
        percentage: 3
    },
    {
        title: "Head",
        content: "Lorem ipsum"
    },
    {
        title: "Glasses",
        content:
        "Lorem ipsum",
        percentage: 2
    },
    {
        title: "Legs",
        content: "Lorem ipsum",
        percentage: 92
    },
    {
        title: "Joy",
        content:
        "Lorem ipsum",
        percentage: 2
    },
    {
        title: "Sugar",
        content: "Lorem ipsum",
        percentage: 46
    },
    {
        title: "Coconut",
        content:
        "Lorem ipsum",
        percentage: 12
    },
    {
        title: "Water",
        content: "Lorem ipsum",
        percentage: 120
    },
    {
        title: "Coconut",
        content:
        "Lorem ipsum",
        percentage: 7
    },
    {
        title: "Water",
        content: "Lorem ipsum",
        percentage: 12
    },
    {
        title: "Coconut",
        content:
        "Lorem ipsum",
        percentage: 14
    },
    {
        title: "Water",
        content: "Lorem ipsum",
        percentage: 5
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

    let itemLayout = (
        <ItemLayout />
    )
    return (
      <div className="container mx-auto">
          <AccordionItem itemLayout={itemLayout}/>
      </div>
    )
  }
  