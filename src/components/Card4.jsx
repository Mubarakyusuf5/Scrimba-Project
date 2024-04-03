import './Card4.css'

const Card4 = (props) => {
  return (
    <>
    <div className="card-con4">
        <img src={`/${props.imageUrl}`} alt="" />
        <div className="con4">
          <span className="location"><img src="/pin.png" alt="" />{props.location}</span> <a href={props.googleMapsUrl} target='_blank' rel='noopener noreferrer' >View on google map</a>
          <h1>{props.title}</h1>
          <p className="date">{props.startDate} - {props.endDate}</p>
          <p className="desc">{props.description}</p>
        </div>
      </div>
    </>
  )
}

export default Card4