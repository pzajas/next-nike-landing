import NavigationSection from '@/src/sections/NavigationSection'

export default function Home() {
  return (
    <div className="flex flex-col justify-center px-4 max-w-screen-xl mx-auto">
      <div className="max-w-[1280px] w-full">
        <NavigationSection />
      </div>

      <div className="h-screen w-full mt-[120px]">Initial Hero Section</div>
    </div>
  )
}
