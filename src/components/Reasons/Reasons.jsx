import './Reasons.css'

export default function Reason(props) {
  const { img, title, description } = props.reason

  return (
    <div className="reason">
      <img src={img}/>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
