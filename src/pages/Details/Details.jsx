import { DetailsStyled, StatusWrapper } from "./DetailsStyles"
//components
import { Loader } from "../../components/UI"
import { DetailsNewsItem } from "../../components"
//others
import { useParams } from "react-router-dom"
import { useSingleNews } from "../../hooks"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const Details = () => {
  const params = useParams()
  const location = useLocation()
  const { details, error, loading } = useSingleNews({ title: params.title })

  if (error) {
    return (
      <StatusWrapper>
        <p>{error}</p>
      </StatusWrapper>
    )
  }

  return (
    <DetailsStyled>
      {loading && <Loader />}
      {details && <DetailsNewsItem data={details} />}
    </DetailsStyled>
  )
}
export default Details
