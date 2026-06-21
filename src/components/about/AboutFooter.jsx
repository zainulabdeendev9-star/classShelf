import { LuArrowRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui";

function AboutFooter() {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-linear-to-r from-slate-900 via-blue-900 to-indigo-800 px-8 py-14 text-center text-white shadow-2xl">
        <h2 className="text-4xl font-bold">Start exploring notes today</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
          Discover helpful resources, stay organized, and build your knowledge with notes that are easy to access.
        </p>

        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => navigate("/notes")}
            className="inline-flex items-center gap-2 bg-white! text-slate-900! hover:bg-slate-100!"
          >
            Browse notes
            <LuArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AboutFooter;