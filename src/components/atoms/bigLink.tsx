interface Option {
  label: string
  href: string
}

export default function BigLink(props: Option) {
  return (
    <a href={props.href} className="flex-shrink-0 text-white text-2xl font-bold">
      { props.label }
    </a>
  )
}