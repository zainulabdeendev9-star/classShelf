import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { Button } from "../../ui";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.08),transparent_18%)]" />
      <div className="relative container mx-auto px-4 text-center">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            404 error
          </p>
          <h1 className="mt-4 text-5xl font-bold text-slate-900 sm:text-6xl">
            Page not found
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              as={Link}
              to="/"
              variant="primary"
              className="inline-flex items-center gap-2"
            >
              <FaHome size={18} />
              Go FaHome
            </Button>
            <Button
              as={Link}
              to="/notes"
              variant="secondary"
              className="inline-flex items-center gap-2"
            >
              <LuArrowLeft size={18} />
              Browse notes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
