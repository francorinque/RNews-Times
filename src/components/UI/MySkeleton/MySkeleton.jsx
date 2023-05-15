import { SkeletonItem } from "./MySkeletonStyles"

import { Skeleton } from "@mui/material"

const MySkeleton = () => {
  return (
    <SkeletonItem>
      <Skeleton
        variant="rectangular"
        animation="wave"
        width="100%"
        height="100%"
      />
    </SkeletonItem>
  )
}
export default MySkeleton
