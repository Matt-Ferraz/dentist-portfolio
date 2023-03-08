interface Option {
  label: string
  href: string
}

export default function NavOption(props: Option) {
  return (
    <a href={props.href} className="text-white hover:bg-default-bg duration-500 hover:text-main-golden block px-3 py-2 rounded-md text-base font-medium">
      { props.label }
    </a>
  )
}