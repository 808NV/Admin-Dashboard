import { Link } from "react-router"
import logo from "../../../public/assets/icons/logo.svg"
import googleIcon from "../../../public/assets/icons/google.svg"
import { loginWithGoogle } from "~/appwrite/auth"

const SignIn = () => {
  const handleLoader = async () => {
    // Implement loader logic here
  }
  return (
    <main className="auth w-full h-screen flex bg-cover bg-no-repeat">
      <section className="size-full glassmorphism flex items-center justify-center px-6">
        <div className="sign-in-card flex flex-col justify-center items-center bg-white/90 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>
          <header className="header flex items-center gap-2 mb-8">
            {/* Sign In Form Goes Here */}
            <Link to="/">
              <img src={logo} alt="logp" className="size-[30px]" />
            </Link>
            <h1 className="p-28-bold text-black">Tourvisto</h1>
          </header>

          <article className="flex flex-col gap-2">
            <h2 className="font-semibold text-center">Start Your Journey Now</h2>
            <p className="text-center text-gray-600">Sign in with Google to manage destinations, itineraries, and user activity with ease </p>
          </article>

          <button type="button" className="w-full h-11 bg-blue-500 mt-6 flex items-center justify-center gap-2 rounded-md text-white font-medium hover:bg-blue-400 transition-colors cursor-pointer"
            onClick={loginWithGoogle}>
            <img src={googleIcon} alt="google"/>
            <span className="text-md font-semibold">Sign in with Google</span>
          </button>
        </div>
      </section>
    </main>
  )
}

export default SignIn