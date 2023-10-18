import { Badge } from 'react-bootstrap'
import { BiTimeFive } from 'react-icons/bi'
import { BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs'
import { PillState } from './PillTypes'

/* State Badges */
const errorBadge = (
  <Badge pill bg='light' text='danger' className='badge-error'>
    !
  </Badge>
)

const timeBadge = <BiTimeFive className='badge-time' />

const acceptedBadge = <BsFillCheckCircleFill className='badge-accepted' />

const rejectedBadge = <BsFillXCircleFill className='badge-rejected' />

/* Map of badges */
const badgeMap = {
  error: errorBadge,
  time: timeBadge,
  accepted: acceptedBadge,
  rejected: rejectedBadge,
}

export const renderBadges = (pillState?: PillState | PillState[]) => {
  if (Array.isArray(pillState)) {
    return pillState.map((state) => badgeMap[state])
  }

  return pillState ? badgeMap[pillState] : null
}
