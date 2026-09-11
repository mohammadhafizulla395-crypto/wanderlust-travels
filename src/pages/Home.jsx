import HomeHero from '../components/HomeHero'
import HomeDestinations from '../components/HomeDestinations'
import HomeWhyUs from '../components/HomeWhyUs'
import HomeTours from '../components/HomeTours'
import HomeExperience from '../components/HomeExperience'
import HomeStats from '../components/HomeStats'
import HomeGallery from '../components/HomeGallery'
import HomeTestimonials from '../components/HomeTestimonials'
import HomeBlog from '../components/HomeBlog'
import HomeCTA from '../components/HomeCTA'

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeDestinations />
      <HomeWhyUs />
      <HomeTours />
      <HomeExperience />
      <HomeStats />
      <HomeGallery />
      <HomeTestimonials />
      <HomeBlog />
      <HomeCTA />
    </div>
  )
}
