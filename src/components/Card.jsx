import './Card.css'

const Card = (props) => {
  return (
    <>
        <div className="card-container">
            <img src={`/${props.img}`} alt="" />
            <h2>{props.name}</h2>
            <p className='p1'>{props.title}</p>
            <p className='p2'>{props.email}</p>
            <div className="content">
                <div className="btn">
                <button>Email</button>
                <button>LinkedIn</button>
                </div>
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero magnam earum veniam? Vel, quae? Molestiae commodi aspernatur </p>
                <h3 className='abt'>Contact</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugit iure id nam? Quisquam doloribus ipsam saepe consequuntur,</p>
            </div>
            <div className="footer">
               {props.foot.map((item) => (
            <a key={item.id} href={item.link} target='_blank' rel="noopener noreferrer">
              <img src={`/${item.img}`} alt="" />
            </a>
          ))}
            </div>
        </div>
    </>
  )
}

export default Card