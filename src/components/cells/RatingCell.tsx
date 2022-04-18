import { StarIcon } from "@heroicons/react/solid"
import BlankCell from "./BlankCell"

interface IRatingCell {
  rating: number | undefined
}

function RatingCell({ rating }: IRatingCell) {

  if (rating === undefined) {
    return <BlankCell />
  }

  return (
    <div>
      {[...Array(rating)].map((_, key) => <StarIcon key={key} className="text-yellow-400 inline h-4 w-4" />)}
    </div>
  )
}

export default RatingCell