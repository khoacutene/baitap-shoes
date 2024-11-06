import Item from "./item" 

export default function List_item() {
  return (
    <div className="grid grid-cols-4 m-6 gap-5">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </div>
  )
}
