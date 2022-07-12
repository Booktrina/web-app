declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

type StatelessComponent<P> = React.FunctionComponent<P>
interface SvgrComponent
  extends StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}
