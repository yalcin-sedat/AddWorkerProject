const Card = (props) => {
  return (
    <div className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400  p-5 rounded-xl ${props.addClasse} ${props.listClasse}`}>{props.children}</div>
  )
}
export default Card