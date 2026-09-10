import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <svg className="w-20 h-20 text-primary-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
          </svg>
        </div>
        <h1 className="font-heading text-6xl md:text-8xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-neutral-500 max-w-md mx-auto mb-8">
          Looks like this page has wandered off the beaten path. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300"
          >
            Return Home
          </Link>
          <Link
            to="/destinations"
            className="inline-block border-2 border-primary-200 hover:border-primary-300 text-primary-700 font-semibold px-8 py-4 rounded-full transition-colors duration-300"
          >
            Browse Destinations
          </Link>
        </div>
      </div>
    </div>
  )
}
