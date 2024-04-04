const Card = (props) => {
  return (
    <div className={`bg-black p-5 rounded-xl ${props.addClasse} ${props.listClasse}`}>{props.children}</div>
  )
}
export default Card