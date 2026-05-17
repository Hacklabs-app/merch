import PageActual from './page_actual'
import type { Metadata } from 'next'

export const generateStaticParams = () => []

export default async function Page(props: any) {
  return <PageActual {...props} />
}
