import Link from '../atoms/link'

export default function OptionsSectionNavBar() {
  const options = [
    { label: "Home", href: "/" },
    { label: "Sobre mim", href: "/sobre-mim" },
    { label: "Contate-me", href: "/" },
  ]
  return (
    <>
      {
        options.map(option => (
          <Link key={option.label} label={option.label} href={option.href} />
        ))
      }
    </>   
  )
}