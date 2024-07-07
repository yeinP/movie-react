import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Movie({medium_cover_image, title, summary, genres, id}) {
    return (
        <div>
            <img src={medium_cover_image} alt="title"/>
            <h1><Link to={`/movie/${id}`}>{title}</Link></h1>
            <span>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</span>
            <ul>
              {genres.map((g)=>(
               <li key={g}>{g}</li> 
              ))}
            </ul>
          </div>
    )
}

Movie.propType = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title :PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres :PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;