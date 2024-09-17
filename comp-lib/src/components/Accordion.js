import { useState } from 'react'

export default function Accordion(props) {
const [expandedIndex, setExpandedIndex] = useState(0)
const handleClick = (index) => {}

const { items } = props
const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex
    return (
    <div key={item.id}>
        <div onClick={handleClick(index)}className="flex justify-between p-3 bg=gray-100 border-b items-center cursor-pointer">{item.label}</div>
        {/* If the content index matches the expanded index in state, render it, otherwise render nothing*/}
        {isExpanded && <div>{item.content}</div>}
    </div>
  )
})

  return <div>{renderedItems}</div>
}