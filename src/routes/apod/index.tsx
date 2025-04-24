import { createFileRoute } from '@tanstack/react-router'
import ApodList from '../../features/apod/ApodList'

export const Route = createFileRoute('/apod/')({
  component: ApodComponent,
})

function ApodComponent() {
  return <ApodList />
}
