import heroImg from "../images/hero.png"

export default function Description() {

    return (
      <>
        <div className="restaurant-desc-parent">
            <div className="restaurant-desc">
                <p className="title desc-title">Little Lemon</p>
                <p className="subtitle desc-subtitle">Chicago</p>
                <p className="desc-text desc">We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.</p>
            </div>
            <img className="desc-img" src={heroImg} alt="hero image"/>
        </div>
      </>
    )
  }
  

  