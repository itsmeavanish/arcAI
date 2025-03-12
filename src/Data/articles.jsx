import img3 from "../assets/logo2.png";
import img1 from "../assets/logo2.png";
import img4 from "../assets/logo2.png";
import img2 from "../assets/logo2.png";
import ArticlePage from "../Pages/blog"
export const articles = [
    {
      id: "1",
      title: "Use of conversational AI in businesses",
      doctor: "Anurag Upadhyay",
      doctorImage: img2,
      image: img1,
      content: "AI Play a vital role in businesses these days.",
    },
    
  ];

  export default function Articles(){
    return(
    <div style={{position:"relative",zIndex:"10"}}>
        {articles.map((article)=><ArticlePage article={article} key={article.id} />)}
    </div>
    )
  }
  