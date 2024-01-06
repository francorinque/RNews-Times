import { DetailsStyled, StatusWrapper } from "./DetailsStyles"
//components
import { DetailsNewsItem } from "../../components"
import { Loader } from "../../components/UI"
//others
import { useParams } from "react-router-dom"
import { useSingleNews } from "../../hooks"

const Details = () => {
  const params = useParams()
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
      {loading ? <Loader /> : <DetailsNewsItem data={details && details} />}
    </DetailsStyled>
  )
}
export default Details
