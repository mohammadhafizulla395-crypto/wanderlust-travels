import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="py-32 bg-neutral-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl font-bold text-neutral-200 mb-4">404</h1>
          <h2 className="font-heading text-2xl text-neutral-900 mb-4">Page Not Found</h2>
          <p className="text-neutral-500 max-w-md mx-auto mb-8">
            Looks like this page has wandered off the beaten path. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
            >
              Go Home
            </Link>
            <Link
              to="/tours"
              className="inline-block border border-neutral-200 hover:bg-neutral-100 text-neutral-700 font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
            >
              Browse Tours
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
