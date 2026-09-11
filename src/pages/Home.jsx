import HomeHero from '../components/HomeHero'
import HomeDestinations from '../components/HomeDestinations'
import HomeTours from '../components/HomeTours'
import HomeWhyUs from '../components/HomeWhyUs'
import HomeExperience from '../components/HomeExperience'
import HomeStats from '../components/HomeStats'
import HomeGallery from '../components/HomeGallery'
import HomeTestimonials from '../components/HomeTestimonials'
import HomeJournal from '../components/HomeJournal'
import HomeCTA from '../components/HomeCTA'

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeDestinations />
      <HomeTours />
      <HomeWhyUs />
      <HomeExperience />
      <HomeStats />
      <HomeGallery />
      <HomeTestimonials />
      <HomeJournal />
      <HomeCTA />
    </div>
  )
}
