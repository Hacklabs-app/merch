import PageActual from './page_actual'

export const generateStaticParams = () => []

export default async function Page(props: any) {
  return <PageActual {...props} />
}
