import Card from "../components/Card";
import "./Project2.css";

export default function Project2() {
  const project = [
    {
      id: 1,
      img: "IMG_9824 (2).jpg",
      title: "Web Developer",
      name: "Mubarak Yusuf",
      email: "yusufmubarak460@gmail.com",
      foot: [
        {id: 1,img: "github-white.png", link:'http://www.linkedin.com'},
        {id: 2,img: "facebook.svg", link:'http://www.linkedin.com'},
        {id: 3,img: "instagram.png", link:'http://www.linkedin.com'},
        {id: 4,img: "x.svg", link:'http://www.linkedin.com'}
      ],
    },
    {
      id: 2,
      img: "user.png",
      title: "Agricultural Engineer",
      name: "Ibrahim Yusuf",
      email: "kambarawafabrication@gmail.com",
      foot: [
        { id: 1,img: "linkedin.svg", link:'http://www.linkedin.com'},
        { id: 2,img: "facebook.svg", link:'http://www.linkedin.com'},
        { id: 3,img: "instagram.png", link:'http://www.linkedin.com'},
        { id: 4,img: "x.svg", link:'http://www.linkedin.com'},
        { id: 5,img: "github-white.png", link:'http://www.linkedin.com'}
      ],
    },
  ];
  const placing = project.map(item=>{
    return (
      <Card 
          key={item.id}
          img={item.img}
          title={item.title}
          name={item.name}
          email={item.email}
          foot={item.foot}
          // link={item.foot}
      />
    )
  })
  return (
    <>
      <div className="container2">
        {placing}
      </div>
    </>
  );
}
