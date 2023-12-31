import Link from "next/link";

function Form({ type, post, setPost, submitting, handleSubmit }) {
  return (
    <section className="w-full max-w-full flex-start flex-col font-inter">
      <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] text-primary-green sm:text-5xl text-left">
        {type} Post
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-semibold text-base text-gray-700">
            Tag{" "}
            <span className="font-normal">
              (#reactjs, #nextjs, #frontenddevelopment)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="Write your tag here..."
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-red-700">
            Cancel
          </Link>
          <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-green-900 text-white rounded-lg">
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
